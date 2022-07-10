import { IAvailableSpells, IMagic } from "./interface";

abstract class Hero {
    name!: string;
    health: number = 0;
    hit = 0;
    archery_shot: number | undefined;
}

class Attack {
    public hit: number; 
    public archeryShot: number | undefined;

    constructor(hit: number, archery_shot?: number) {
        this.hit = hit;
        this.archeryShot = archery_shot;
    }
}

class Magic extends Attack {
    availableSpells!: IAvailableSpells;
    lightning!: IMagic;

    get Lightning(): IMagic {
        return this.lightning;
    }

    set Lightning(config: IMagic) {
        this.lightning = config;
    }

    get AvailableSpells(): IAvailableSpells {
        return this.availableSpells;
    }

    set AvailableSpells(config: IAvailableSpells) {
        this.availableSpells = config;
    }

    constructor(hit: number){
        super(hit);
        this.hit = hit;
    }
}

export class Warrior extends Hero {
    private typeOfAttack = new Attack(20);
    constructor() {
        super();
        this.name = 'Warrior';
        this.health = 200;
        this.hit = this.typeOfAttack.hit;
    }
}

export class Archer extends Hero{
    private typeOfAttack = new Attack(10,20);
    constructor() {
        super();
        this.name = 'Archer';
        this.health = 150;
        this.hit = this.typeOfAttack.hit;
        this.archery_shot = this.typeOfAttack.archeryShot;
    }
}

export class Mage extends Hero{
    mana = 100;
    availableSpells!:IAvailableSpells;
    lightning!: IMagic;
    private magic = new Magic(5);
    private setAvailableApells = this.magic.AvailableSpells = {
        fire_ball: {
            hit: 20,
            mana: 20, 
        },
        ice_arrow: {
            hit: 40,
            mana: 20,
            recharge: 1
        }};
    private setLightning = this.magic.Lightning = {
        hit: 100,
        mana: 30,
        recharge: 2
    }
    constructor() {
        super();
        this.name = 'Mage';
        this.health = 150;
        this.hit = this.magic.hit;
        this.availableSpells = this.magic.AvailableSpells;
        this.lightning = this.magic.Lightning;
    }
}