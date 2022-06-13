export type RoomType = 'wall' | 'empty' |'trap' | 'enemy';

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
