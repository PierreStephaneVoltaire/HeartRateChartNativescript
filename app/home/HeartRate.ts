
import { ObservableProperty } from "../Home/observable-property-decorator";

export class HeartRate {
    public bpm: number;
    public timestamp: Date;
    constructor(bpm: number, timestamp: Date) {
        this.bpm = bpm;
        this.timestamp = timestamp

    }
}