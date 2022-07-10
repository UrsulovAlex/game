export type RoomType = 'wall' | 'empty' |'trap' | 'enemy';
export type HeroType = 'warrior' | 'archer' |'mage' ;
export type messageType = 'hero' | 'room';

export interface ICell {
    state: RoomType,
}

export interface IRoom {
    rows: [ICell[], ICell[], ICell[], ICell[]];
}

export interface IConfig {
    preset: IRoom;
    messegeConfig: string;
}

export interface IMagic {
    hit: number;
    mana: number;
    recharge?: number
}

export interface IAvailableSpells {
    fire_ball: IMagic;
    ice_arrow: IMagic;
}

export interface IHero {
    name: string;
    health: number;
    hit:  number;
    archery_shot?: number | undefined;
}

export interface IMage extends IHero{
    mana?: number;
    available_spells?:IAvailableSpells;
    lightning?: IMagic;
}
