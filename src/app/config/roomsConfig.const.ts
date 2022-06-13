import { IConfig } from "../model/interface";
import { roomPresetFour } from "./roomPresetFour.const";
import { roomPresetOne } from "./roomPresetOne.const";
import { roomPresetThree } from "./roomPresetThree.const";
import { roomPresetTwo } from "./roomPresetTwo.const";
import { roomPresetFive } from "./roomsPresetFive.const";


const configOne: IConfig = {
    preset: roomPresetOne,
    messegeConfig: 'generate the first room'
}

const configTwo: IConfig = {
    preset: roomPresetTwo,
    messegeConfig: 'generate the second room'
}

const configThree: IConfig = {
    preset: roomPresetThree,
    messegeConfig: 'generate the third room'
}

const configFour: IConfig = {
    preset: roomPresetFour,
    messegeConfig: 'generate the fourth room'
}

const configFive: IConfig = {
    preset: roomPresetFive,
    messegeConfig: 'generate the fifth room'
}

export const arrayConfig: IConfig[] = [configOne, configTwo, configThree, configFour, configFive];