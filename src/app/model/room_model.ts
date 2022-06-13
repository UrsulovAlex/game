import { ICell, IRoom, RoomType, IConfig } from "./interface";

export class Cell implements ICell {
    public state!: RoomType;

    constructor(state: RoomType){
        this.state = state;
    }
}

export class Room {
    private roomsConfig!: IRoom;
    private message: Logger;

    constructor(rooms: IRoom, message: string ) {
        this.roomsConfig = rooms;
        this.message = new Logger(message);
    }

    generate(): IRoom {
        return this.roomsConfig;
    }

    getMessage(): string {
        return this.message.message;
    }
}

export class PlayingField {
    arrayRooms: Room[] = [];
    arrayConfig: IConfig[] = [];
    messageRoom!: string;
    rooms!: IRoom;
    message!: Logger;

    constructor(roomConfig: IConfig[]) {
        this.arrayConfig = roomConfig;
    }

    generateRooms(): void {
        this.arrayRooms = this.arrayConfig.map(el => new Room(el.preset, el.messegeConfig));
    }

    get setActiveRooms(): IRoom {
        let activElemnt: Room = this.arrayRooms[Math.floor(Math.random() * this.arrayRooms.length)];
        this.getMessageRoom(activElemnt.getMessage());
        return activElemnt.generate();
    }

    getMessageRoom(message: string): void {
        this.messageRoom = message;
    }

    getMessage(): string {
        return this.message.message;
    }
}

export class Logger {
    message: string;

    constructor(message: string) {
        this.message = message;
    }

    get generate(): string {
        return this.message;
    }
}