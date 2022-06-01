type RoomType = 'wall' | 'empty' |'trap' | 'enemy';

export interface ICell {
    state: RoomType,
}

export interface IRoom {
    rows: [Cell[], Cell[], Cell[], Cell[]];
}

export class Cell {
    state: RoomType;

    constructor(state: RoomType){
        this.state = state
    }
}

export class Labirint {
    rooms: IRoom;

    constructor(rooms: IRoom) {
        this.rooms = rooms;
    }

    generate(): IRoom {
        return this.rooms
    }
}

export const roomPresetOne: IRoom = {
    rows: [
        [new Cell('wall'), new Cell('empty'), new Cell('wall'), new Cell('wall')],
        [new Cell('wall'), new Cell('empty'), new Cell('wall'), new Cell('wall')],
        [new Cell('empty'), new Cell('empty'), new Cell('wall'), new Cell('wall')],
        [new Cell('empty'), new Cell('wall'), new Cell('wall'), new Cell('wall')]
    ]
}