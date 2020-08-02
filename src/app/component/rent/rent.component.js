import { __decorate } from "tslib";
import { Component } from '@angular/core';
let RentComponent = class RentComponent {
    constructor(_rentService, _router) {
        this._rentService = _rentService;
        this._router = _router;
        this.rents = {
            Car_ID: null,
            Model: null,
            User_ID: null,
            Daily_Cost: null,
            Start_date: null,
            Number_of_days: null,
            Transmision: null,
        };
        this.Number_of_days = 5;
    }
    ngOnInit() {
    }
    saveNewRent() {
        this._rentService.save(this.rents);
        this._router.navigate(['manager']);
    }
};
RentComponent = __decorate([
    Component({
        selector: 'app-rent',
        templateUrl: './rent.component.html',
        styleUrls: ['./rent.component.css']
    })
], RentComponent);
export { RentComponent };
//# sourceMappingURL=rent.component.js.map