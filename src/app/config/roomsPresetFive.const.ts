import { IRoom } from "../model/interface";
import { Cell } from "../model/room_model";

export const roomPresetFive: IRoom = {
    rows: [
        [new Cell('wall'), new Cell('wall'), new Cell('wall'), new Cell('empty')],
        [new Cell('wall'), new Cell('wall'), new Cell('wall'), new Cell('empty')],
        [new Cell('wall'), new Cell('wall'), new Cell('empty'), new Cell('empty')],
        [new Cell('wall'), new Cell('wall'), new Cell('empty'), new Cell('wall')]
    ]
}