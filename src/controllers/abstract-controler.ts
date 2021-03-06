import { User } from './../entities/User';
import { Request } from 'express';
import jwt from 'jsonwebtoken';
import config from '../config/config.json';
import { ConnectError } from '../classes/connect-error';
import db from '../db/pgpool';
import { UsersService } from '../services/users-service';
import globalhelper from '../helpers/globals-helper';

let pool = db.getPool();

export class AbstractController {

    /**
	 * Retrieves a user from the request
     * 
     * @param {Request} req The request
	 */
    static async getUserFromRequest(req: Request) {

        const token = req.headers.authorization.split(' ')[1];
        const decodedPayload: any = jwt.verify(token, config.jwtSecret);

        if (!decodedPayload.user.id) {
            globalhelper.setExpFalse();
            throw new ConnectError('INVALID_TOKEN');
        }
        let user: User = await UsersService.getUserFromRequest(decodedPayload.user.id);
        if (!user) {
            globalhelper.setExpFalse();
            throw new ConnectError('USER_NOT_FOUND');
        }
        return user;
    };

    static async updateUserInfo(user: User) {
        await UsersService.updateUserInfo(user);
        await UsersService.updateExpeditions(user);

    }

}


