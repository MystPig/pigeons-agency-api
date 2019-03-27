import { PrivatePigeonStat } from './../entities/private-pigeon-stat';
const pigeonList: PrivatePigeonStat[] =
    [
        {
            type: 0,
            name: "Dummy pigeon",
            rank: 1,
            element: 1,
            attack: 2,
            attackvariance: 1,
            attackrandomness: 1,
            shield: 0,
            shieldvariance: 0,
            defense: 2,
            defensevariance: 1,
            defenserandomness:0,
            energy: 5,
            feedcost: 5,
            droppingsminute: 1,
            droppingsminutevariance: 0,
            feathers: 1
        },
        {
            type: 1,
            name: "Small common pigeon",
            rank: 1,
            element: 1,
            attack: 2,
            attackvariance: 1,
            attackrandomness: 1,
            shield: 0,
            shieldvariance: 0,
            defense: 2,
            defensevariance: 1,
            defenserandomness:0,
            energy: 5,
            feedcost: 2,
            droppingsminute: 1,
            droppingsminutevariance: 0,
            feathers: 2
        },
        {
            type: 2,
            name: "Small uncommon pigeon",
            rank: 2,
            element: 1,
            attack: 3,
            attackvariance: 1,
            attackrandomness: 1,
            shield: 0,
            shieldvariance: 0,
            defense: 3,
            defensevariance: 1,
            defenserandomness:0,
            energy: 7,
            feedcost: 3,
            droppingsminute: 3,
            droppingsminutevariance: 0,
            feathers: 3
        },
        {
            type: 3,
            name: "Small rare pigeon",
            rank: 3,
            element: 1,
            attack: 6,
            attackvariance: 2,
            attackrandomness: 1,
            shield: 0,
            shieldvariance: 0,
            defense: 5,
            defensevariance: 1,
            defenserandomness:0,
            energy: 12,
            feedcost: 5,
            droppingsminute: 5,
            droppingsminutevariance: 0,
            feathers: 5
        },
        {
            type: 4,
            name: "Small epic pigeon",
            rank: 4,
            element: 1,
            attack: 9,
            attackvariance: 2,
            attackrandomness: 1,
            shield: 0,
            shieldvariance: 0,
            defense: 7,
            defensevariance: 1,
            defenserandomness:0,
            energy: 18,
            feedcost: 8,
            droppingsminute: 7,
            droppingsminutevariance: 0,
            feathers: 10
        },
        {
            type: 5,
            name: "Small legendary pigeon",
            rank: 5,
            element: 1,
            attack: 15,
            attackvariance: 3,
            attackrandomness: 2,
            shield: 0,
            shieldvariance: 0,
            defense: 10,
            defensevariance: 2,
            defenserandomness:0,
            energy: 25,
            feedcost: 10,
            droppingsminute: 9,
            droppingsminutevariance: 0,
            feathers: 20
        },
        {
            type: 6,
            name: "Fat common pigeon",
            rank: 1,
            element: 1,
            attack: 1,
            attackvariance: 0,
            attackrandomness: 1,
            shield: 1,
            shieldvariance: 0,
            defense: 4,
            defensevariance: 1,
            defenserandomness:1,
            energy: 5,
            feedcost: 3,
            droppingsminute: 4,
            droppingsminutevariance: 1,
            feathers: 3
        },
        {
            type: 7,
            name: "Fat uncommon pigeon",
            rank: 2,
            element: 1,
            attack: 2,
            attackvariance: 0,
            attackrandomness: 0,
            shield: 2,
            shieldvariance: 0,
            defense: 6,
            defensevariance: 1,
            defenserandomness:1,
            energy: 8,
            feedcost: 5,
            droppingsminute: 6,
            droppingsminutevariance: 1,
            feathers: 5
        },
        {
            type: 8,
            name: "Fat rare pigeon",
            rank: 3,
            element: 1,
            attack: 3,
            attackvariance: 0,
            attackrandomness: 1,
            shield: 3,
            shieldvariance: 0,
            defense: 10,
            defensevariance: 2,
            defenserandomness:2,
            energy: 12,
            feedcost: 8,
            droppingsminute: 10,
            droppingsminutevariance: 2,
            feathers: 10
        },
        {
            type: 9,
            name: "Fat epic pigeon",
            rank: 4,
            element: 1,
            attack: 5,
            attackvariance: 1,
            attackrandomness: 1,
            shield: 4,
            shieldvariance: 0,
            defense: 15,
            defensevariance: 3,
            defenserandomness:3,
            energy: 18,
            feedcost: 13,
            droppingsminute: 15,
            droppingsminutevariance: 3,
            feathers: 18
        }
        ,
        {
            type: 10,
            name: "Fat legendary pigeon",
            rank: 5,
            element: 1,
            attack: 7,
            attackvariance: 1,
            attackrandomness: 1,
            shield: 5,
            shieldvariance: 0,
            defense: 23,
            defensevariance: 4,
            defenserandomness:3,
            energy: 25,
            feedcost: 16,
            droppingsminute: 20,
            droppingsminutevariance: 4,
            feathers: 25
        },
        {
            type: 11,
            name: "Sneaky common pigeon",
            rank: 1,
            element: 1,
            attack: 4,
            attackvariance: 1,
            attackrandomness: 1,
            shield: 0,
            shieldvariance: 0,
            defense: 1,
            defensevariance: 1,
            defenserandomness:0,
            energy: 5,
            feedcost: 2,
            droppingsminute: 1,
            droppingsminutevariance: 0,
            feathers: 2
        },
        {
            type: 12,
            name: "Sneaky uncommon pigeon",
            rank: 2,
            element: 1,
            attack: 6,
            attackvariance: 2,
            attackrandomness: 1,
            shield: 0,
            shieldvariance: 0,
            defense: 2,
            defensevariance: 1,
            defenserandomness:0,
            energy: 8,
            feedcost: 4,
            droppingsminute: 2,
            droppingsminutevariance: 0,
            feathers: 3
        },
        {
            type: 13,
            name: "Sneaky rare pigeon",
            rank: 3,
            element: 1,
            attack: 9,
            attackvariance: 2,
            attackrandomness: 2,
            shield: 0,
            shieldvariance: 0,
            defense: 3,
            defensevariance: 1,
            defenserandomness:0,
            energy: 12,
            feedcost: 6,
            droppingsminute: 3,
            droppingsminutevariance: 0,
            feathers: 6
        },
        {
            type: 14,
            name: "Sneaky epic pigeon",
            rank: 4,
            element: 1,
            attack: 16,
            attackvariance: 3,
            attackrandomness: 3,
            shield: 0,
            shieldvariance: 0,
            defense: 4,
            defensevariance: 1,
            defenserandomness:0,
            energy: 18,
            feedcost: 8,
            droppingsminute: 5,
            droppingsminutevariance: 0,
            feathers: 10
        },
        {
            type: 15,
            name: "Sneaky legendary pigeon",
            rank: 5,
            element: 1,
            attack: 23,
            attackvariance: 4,
            attackrandomness: 4,
            shield: 0,
            shieldvariance: 0,
            defense: 5,
            defensevariance: 1,
            defenserandomness:0,
            energy: 25,
            feedcost: 11,
            droppingsminute: 7,
            droppingsminutevariance: 0,
            feathers: 20
        },
        {
            type: 16,
            name: "Hugo pigeon",
            rank: 1,
            element: 1,
            attack: 0,
            attackvariance: 0,
            attackrandomness: 0,
            shield: 0,
            shieldvariance: 0,
            defense: 0,
            defensevariance: 0,
            defenserandomness:0,
            energy: 5,
            feedcost: 1,
            droppingsminute: 5,
            droppingsminutevariance: 0,
            feathers: 10
        },
        {
            type: 17,
            name: "Dummy pigeon",
            rank: 1,
            element: 1,
            attack: 2,
            attackvariance: 1,
            attackrandomness: 1,
            shield: 0,
            shieldvariance: 0,
            defense: 2,
            defensevariance: 1,
            defenserandomness:0,
            energy: 5,
            feedcost: 5,
            droppingsminute: 1,
            droppingsminutevariance: 0,
            feathers: 1
        },
        {
            type: 18,
            name: "Dummy pigeon",
            rank: 1,
            element: 1,
            attack: 2,
            attackvariance: 1,
            attackrandomness: 1,
            shield: 0,
            shieldvariance: 0,
            defense: 2,
            defensevariance: 1,
            defenserandomness:0,
            energy: 5,
            feedcost: 5,
            droppingsminute: 1,
            droppingsminutevariance: 0,
            feathers: 1
        },{
            type: 19,
            name: "Dummy pigeon",
            rank: 1,
            element: 1,
            attack: 2,
            attackvariance: 1,
            attackrandomness: 1,
            shield: 0,
            shieldvariance: 0,
            defense: 2,
            defensevariance: 1,
            defenserandomness:0,
            energy: 5,
            feedcost: 5,
            droppingsminute: 1,
            droppingsminutevariance: 0,
            feathers: 1
        },{
            type: 20,
            name: "Dummy pigeon",
            rank: 1,
            element: 1,
            attack: 2,
            attackvariance: 1,
            attackrandomness: 1,
            shield: 0,
            shieldvariance: 0,
            defense: 2,
            defensevariance: 1,
            defenserandomness:0,
            energy: 5,
            feedcost: 5,
            droppingsminute: 1,
            droppingsminutevariance: 0,
            feathers: 1
        },
        {
            type: 21,
            name: "King common pigeon",
            rank: 1,
            element: 1,
            attack: 8,
            attackvariance: 2,
            attackrandomness: 1,
            shield: 0,
            shieldvariance: 0,
            defense: 14,
            defensevariance: 3,
            defenserandomness:5,
            energy: 10,
            feedcost: 10,
            droppingsminute: 10,
            droppingsminutevariance: 5,
            feathers: 10
        },
        {
            type: 22,
            name: "King uncommon pigeon",
            rank: 2,
            element: 1,
            attack: 10,
            attackvariance: 2,
            attackrandomness: 1,
            shield: 0,
            shieldvariance: 0,
            defense: 17,
            defensevariance: 3,
            defenserandomness:5,
            energy: 10,
            feedcost: 10,
            droppingsminute: 13,
            droppingsminutevariance: 5,
            feathers: 15
        },
        {
            type: 23,
            name: "King rare pigeon",
            rank: 3,
            element: 1,
            attack: 12,
            attackvariance: 2,
            attackrandomness: 1,
            shield: 0,
            shieldvariance: 0,
            defense: 20,
            defensevariance: 4,
            defenserandomness:5,
            energy: 10,
            feedcost: 10,
            droppingsminute: 15,
            droppingsminutevariance: 5,
            feathers: 18
        },
        {
            type: 24,
            name: "King epic pigeon",
            rank: 4,
            element: 1,
            attack: 14,
            attackvariance: 2,
            attackrandomness: 1,
            shield: 1,
            shieldvariance: 1,
            defense: 25,
            defensevariance: 5,
            defenserandomness:5,
            energy: 10,
            feedcost: 10,
            droppingsminute: 17,
            droppingsminutevariance: 5,
            feathers: 20
        },
        {
            type: 25,
            name: "King legendary pigeon",
            rank: 5,
            element: 1,
            attack: 16,
            attackvariance: 2,
            attackrandomness: 1,
            shield: 2,
            shieldvariance: 1,
            defense: 32,
            defensevariance: 5,
            defenserandomness:6,
            energy: 10,
            feedcost: 10,
            droppingsminute: 20,
            droppingsminutevariance: 5,
            feathers: 25
        },
        {
            type: 26,
            name: "Assassin common pigeon",
            rank: 1,
            element: 1,
            attack: 14,
            attackvariance: 3,
            attackrandomness: 5,
            shield: 0,
            shieldvariance: 0,
            defense: 6,
            defensevariance: 1,
            defenserandomness:1,
            energy: 10,
            feedcost: 10,
            droppingsminute: 5,
            droppingsminutevariance: 2,
            feathers: 7
        },
        {
            type: 27,
            name: "Assassin uncommon pigeon",
            rank: 2,
            element: 1,
            attack: 17,
            attackvariance: 3,
            attackrandomness: 5,
            shield: 0,
            shieldvariance: 0,
            defense: 9,
            defensevariance: 1,
            defenserandomness:1,
            energy: 10,
            feedcost: 10,
            droppingsminute: 7,
            droppingsminutevariance: 2,
            feathers: 9
        },
        {
            type: 28,
            name: "Assassin rare pigeon",
            rank: 3,
            element: 1,
            attack: 20,
            attackvariance: 4,
            attackrandomness: 5,
            shield: 0,
            shieldvariance: 0,
            defense: 12,
            defensevariance: 2,
            defenserandomness:2,
            energy: 10,
            feedcost: 10,
            droppingsminute: 10,
            droppingsminutevariance: 3,
            feathers: 12
        },
        {
            type: 29,
            name: "Assassin epic pigeon",
            rank: 4,
            element: 1,
            attack: 25,
            attackvariance: 5,
            attackrandomness: 5,
            shield: 0,
            shieldvariance: 0,
            defense: 14,
            defensevariance: 2,
            defenserandomness:2,
            energy: 10,
            feedcost: 10,
            droppingsminute: 14,
            droppingsminutevariance: 3,
            feathers: 15
        },
        {
            type: 30,
            name: "Assassin epic pigeon",
            rank: 5,
            element: 1,
            attack: 32,
            attackvariance: 5,
            attackrandomness: 6,
            shield: 0,
            shieldvariance: 0,
            defense: 16,
            defensevariance: 2,
            defenserandomness:2,
            energy: 10,
            feedcost: 10,
            droppingsminute: 16,
            droppingsminutevariance: 3,
            feathers: 19
        }
    ]

export default pigeonList;
