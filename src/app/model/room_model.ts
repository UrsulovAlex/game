type RoomType = 'wall' | 'empty' |'trap' | 'enemy';

export interface ICell {
    state: RoomType,
}

export interface IRoom {
    rows: [Cell[], Cell[], Cell[], Cell[]];
}

export class Cell implements ICell {
    public state!: RoomType;

    constructor(state: RoomType){
        this.state = state;
    }
}

export class Labirint {
    private rooms: IRoom;

    constructor(rooms: IRoom) {
        this.rooms = rooms;
    }

    public get generate(): IRoom {
        return this.rooms
    }
}