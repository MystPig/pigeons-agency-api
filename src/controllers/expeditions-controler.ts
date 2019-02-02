import { Response, Request } from 'express';
import { AbstractController } from './abstract-controler';
import { ExpeditionsService } from '../services/expeditions-service';
import { ConnectError } from "../classes/connect-error";

import expeditionsList from '../model/expeditionsList';
export class ExpeditionsControler extends AbstractController {

    static async getExpeditions(req: Request, res: Response) {
        const user = await ExpeditionsControler.getUserFromRequest(req);
        let data = await ExpeditionsService.getExpeditions(user.id);
        res.status(200).send({
            message: 'ok',
            data: data
        });
    }
    static async launchExpedition(req: Request, res: Response) {

        const user = await ExpeditionsControler.getUserFromRequest(req);
        const expeditiontype: number = req.body.expeditiontype;
        
        if (expeditiontype < 0 || expeditiontype >= expeditionsList.length) {
            throw new ConnectError('REQUIREMENTS_ERROR');
        }
        if (user.seeds < expeditionsList[expeditiontype].seeds) {
            throw new ConnectError('REQUIREMENTS_ERROR');
        }
        await ExpeditionsService.launchExpedition(user.id, expeditiontype, expeditionsList[expeditiontype].duration);

        user.seeds -= expeditionsList[expeditiontype].seeds;
        await ExpeditionsService.paySeeds(user.id, user.seeds);
        res.status(200).send({
            message: 'ok',
            data: null
        });
    }
}