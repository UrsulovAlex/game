import { ICell, IRoom, RoomType, IConfig } from "./interface";
import { arrayConfig } from 'src/app/config/roomsConfig.const';

export class Logger {
    message!: string;

    get getMessage(): string {
        return this.message;
    }
}


export class Cell implements ICell {
    public state!: RoomType;

    constructor(state: RoomType){
        this.state = state;
    }
}

export class Room extends Logger{
    private roomsConfig!: IRoom;

    constructor(rooms: IRoom, message: string ) {
        super();
        this.roomsConfig = rooms;
    }

    generate(): IRoom {
        return this.roomsConfig;
    }

    getMessageRoom(): string {
        return super.getMessage;
    }
}

export class PlayingField extends Logger {
    arrayRooms: Room[] = [];
    arrayConfig: IConfig[] = [];
    messageRoom: string[] = [];    

    constructor(config: IConfig[]) {
        super();
        this.arrayConfig = config;
        // this.arrayConfig = arrayConfig; //пытался присвоеть так при пустом конутрукторе
        this.generateRooms();
    }

    generateRooms(): void {
        this.arrayRooms = this.arrayConfig.map(el => new Room(el.preset, el.messegeConfig));
    }

    get setActiveRooms(): IRoom {
        let activElemnt: Room = this.arrayRooms[Math.floor(Math.random() * this.arrayRooms.length)];
        this.getMessageRoom(activElemnt.getMessageRoom());
        return activElemnt.generate();
    }

    getMessageRoom(message: string): void {
        this.messageRoom.push(message);
    }

    getMessageLabirint(): string {
        return super.getMessage;
    }
}