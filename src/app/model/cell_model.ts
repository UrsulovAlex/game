import { RoomType, ICell } from "./interface";

export class Cell implements ICell {
    public state!: RoomType;

    constructor(state: RoomType){
        this.state = state;
    }
}