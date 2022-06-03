import { Labirint } from "../model/room_model";
import { roomPresetFour } from "./roomPresetFour.const";
import { roomPresetOne } from "./roomPresetOne.const";
import { roomPresetThree } from "./roomPresetThree.const";
import { roomPresetTwo } from "./roomPresetTwo.const";

export interface IConfig {
    preset: Labirint;
    messegeConfig: string;
}

export const configOne: IConfig = {
    preset: new Labirint(roomPresetOne),
    messegeConfig: 'generate first Rooms'
}

export const configTwo: IConfig = {
    preset: new Labirint(roomPresetTwo),
    messegeConfig: 'generate first Rooms'
}

export const configThree: IConfig = {
    preset: new Labirint(roomPresetThree),
    messegeConfig: 'generate first Rooms'
}

export const configFour: IConfig = {
    preset: new Labirint(roomPresetFour),
    messegeConfig: 'generate first Rooms'
}