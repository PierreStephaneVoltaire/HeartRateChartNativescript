import { Observable } from "data/observable";

import { HeartRate } from "../home/HeartRate";
import { ObservableArray } from "tns-core-modules/data/observable-array/observable-array";
import * as dialogs from "ui/dialogs";
import { ObservableProperty } from "../home/observable-property-decorator";


export class HomeViewModel extends Observable {
    //Data source Array
    @ObservableProperty() HeartRateSource: ObservableArray<HeartRate>
/**
 * Creates an instance of HomeViewModel.
 * @description initializes the data source array 
 * @memberof HomeViewModel
 */
constructor() {
        super();
        this.HeartRateSource = new ObservableArray<any>();
        let existingHeartRates = [new HeartRate(123, new Date(1514111242318)), new HeartRate(45, new Date(1514711242318)), new HeartRate(87, new Date(154416242318))]
        this.HeartRateSource = new ObservableArray<any>();
        if (existingHeartRates.length > 0) {
            existingHeartRates.forEach((element) => {
                this.HeartRateSource.push(element);
            });
        }
    }
/**
 * @description takes the user's input and adds the datapoint to the chart
 * @returns void
 * @memberof HomeViewModel
 */
addNewReading(): void {
        dialogs.prompt({
            title: "new pulse reading",
            message: "Please add your new pulse reading",
            okButtonText: "Add",
            cancelButtonText: "Cancel",
            inputType: dialogs.inputType.text
        }).then(r => {
            if (r.result) {
                let reading: number = Number(r.text)
                if (!Number.isNaN(reading) && reading > 0) {
                    let MyNewReadin: HeartRate = new HeartRate(reading, new Date());
                    this.HeartRateSource.push(MyNewReadin);//crashes on ios
                }
            }
        });
    }
}
