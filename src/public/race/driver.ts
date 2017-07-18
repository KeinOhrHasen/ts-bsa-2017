export interface IDriver {
    name: string;
    speed: number;
    move: (el: HTMLElement, distance: number) => void;
}

export default class Driver implements IDriver{
    name: string;
    speed: number;

    move($vehicle: HTMLElement, distance: number){
        $vehicle.style.left = distance + '%';
    }
}