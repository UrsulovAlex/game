import { Cell, IRoom } from "../model/room_model";

export const roomPresetTwo: IRoom = {
    rows: [
        [new Cell('wall'), new Cell('empty'), new Cell('wall'), new Cell('wall')],
        [new Cell('empty'), new Cell('empty'), new Cell('wall'), new Cell('wall')],
        [new Cell('empty'), new Cell('wall'), new Cell('wall'), new Cell('wall')],
        [new Cell('empty'), new Cell('wall'), new Cell('wall'), new Cell('wall')]
    ]
}