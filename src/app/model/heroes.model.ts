import { IAvailableSpells, IMagic } from "./interface";

abstract class Hero {
    name!: string;
    health: number = 0;
    hit = 0;
    archery_shot: number | undefined;
}

class Attack {
    public hit: number; 
    public archery_shot: number | undefined;

    constructor(hit: number, archery_shot?: number) {
        this.hit = hit;
        this.archery_shot = archery_shot;
    }
}

class Magic extends Attack {
    available_spells!: IAvailableSpells;
    lightning!: IMagic;

    get Lightning(): IMagic {
        return this.lightning;
    }

    set Lightning(config: IMagic) {
        this.lightning = config;
    }

    get AvailableSpells(): IAvailableSpells {
        return this.available_spells;
    }

    set AvailableSpells(config: IAvailableSpells) {
        this.available_spells = config;
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
        this.archery_shot = this.typeOfAttack.archery_shot;
    }
}

export class Mage extends Hero{
    mana = 100;
    available_spells!:IAvailableSpells;
    lightning!: IMagic;
    private magic = new Magic(5);
    private set_Available_Apells = this.magic.AvailableSpells = {
        fire_ball: {
            hit: 20,
            mana: 20, 
        },
        ice_arrow: {
            hit: 40,
            mana: 20,
            recharge: 1
        }};
    private set_Lightning = this.magic.Lightning = {
        hit: 100,
        mana: 30,
        recharge: 2
    }
    constructor() {
        super();
        this.name = 'Mage';
        this.health = 150;
        this.hit = this.magic.hit;
        this.available_spells = this.magic.AvailableSpells;
        this.lightning = this.magic.Lightning;
    }

}