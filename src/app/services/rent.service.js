import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let RentService = class RentService {
    constructor() {
        this.rents = [
            {
                Car_ID: 1,
                Model: 'Mars Rover',
                User_ID: 2,
                Daily_Cost: 500,
                Start_date: new Date('06/08/1987'),
                Number_of_days: 5,
                Transmision: 'Auto'
            },
            {
                Car_ID: 2,
                Model: 'Lunar  Rover',
                User_ID: 3,
                Daily_Cost: 235,
                Start_date: new Date('02/09/1990'),
                Number_of_days: 10,
                Transmision: 'Manual'
            },
            {
                Car_ID: 4,
                Model: 'Jamaica Rover',
                User_ID: 2,
                Daily_Cost: 100,
                Start_date: new Date('02/02/2020'),
                Number_of_days: 2,
                Transmision: 'Manual'
            },
        ];
    }
    getRents() {
        return this.rents;
    }
    save(rents) {
        this.rents.push(rents);
    }
};
RentService = __decorate([
    Injectable()
], RentService);
export { RentService };
//# sourceMappingURL=rent.service.js.map