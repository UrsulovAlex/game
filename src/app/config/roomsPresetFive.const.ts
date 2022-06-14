import { Cell } from "../model/cell_model";
import { IRoom } from "../model/interface";

export const roomPresetFive: IRoom = {
    rows: [
        [new Cell('wall'), new Cell('wall'), new Cell('wall'), new Cell('empty')],
        [new Cell('wall'), new Cell('wall'), new Cell('wall'), new Cell('empty')],
        [new Cell('wall'), new Cell('wall'), new Cell('empty'), new Cell('empty')],
        [new Cell('wall'), new Cell('wall'), new Cell('empty'), new Cell('wall')]
    ]
}