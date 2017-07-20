type Experiance = 'low' | 'middle' | 'hight'

export interface IDriver {
    name: string;
    speed: number;
    move: (el: HTMLElement, distance: number) => void;
    experience?: Experiance;
}

export default class Driver implements IDriver{
    name: string;
    speed: number;
    experience: Experiance;

    move($vehicle: HTMLElement, distance: number){
        $vehicle.style.left = distance + '%';
    }
}