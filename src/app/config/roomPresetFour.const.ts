import { IRoom } from "../model/interface";
import { Cell } from "../model/room_model";

export const roomPresetFour: IRoom = {
    rows: [
        [new Cell('wall'), new Cell('wall'), new Cell('empty'), new Cell('wall')],
        [new Cell('wall'), new Cell('empty'), new Cell('empty'), new Cell('wall')],
        [new Cell('wall'), new Cell('empty'), new Cell('empty'), new Cell('wall')],
        [new Cell('wall'), new Cell('empty'), new Cell('wall'), new Cell('wall')]
    ]
}