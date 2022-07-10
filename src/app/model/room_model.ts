import { IRoom, IConfig } from "./interface";
import { arrayConfig } from 'src/app/config/roomsConfig.const';
import { Logger } from "./loger";

export class Room extends Logger{
    private roomsConfig!: IRoom;

    constructor(rooms: IRoom, message: string ) {
        super();
        this.roomsConfig = rooms;
        super.setMessage(message)
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

    constructor() {
        super();
        this.arrayConfig = arrayConfig;
        this.generateRooms();
    }

    generateRooms(): void {
        this.arrayRooms = this.arrayConfig.map(el => new Room(el.preset, el.messegeConfig));
    }

    get setActiveRooms(): IRoom {
        if(this.messageRoom.length <= 4) {
            let activElemnt: Room = this.arrayRooms[Math.floor(Math.random() * this.arrayRooms.length)];
            this.getMessageRoom(activElemnt.getMessageRoom());
            return activElemnt.generate();
        } else {
            this.getMessageRoom('labirint finished');
            return {} as IRoom;
        }
    }

    getMessageRoom(message: string): void {
        this.messageRoom.length <= 4 ? this.messageRoom.push(message) : this.messageRoom.push(message);
    }

    getMessageLabirint(): string {
        return super.getMessage;
    }
}