import { __decorate } from "tslib";
import { Component } from '@angular/core';
let Car1Component = class Car1Component {
    constructor(c) {
        c.get("http://localhost:52366/api/CarProp")
            .subscribe(a => { this.CarProperty = a; });
    }
    ngOnInit() {
    }
};
Car1Component = __decorate([
    Component({
        selector: 'app-car1',
        templateUrl: './car1.component.html',
        styleUrls: ['./car1.component.css']
    })
], Car1Component);
export { Car1Component };
//# sourceMappingURL=car1.component.js.map