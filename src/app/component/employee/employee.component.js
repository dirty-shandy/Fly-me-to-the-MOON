import { __decorate } from "tslib";
import { Component } from '@angular/core';
let EmployeeComponent = class EmployeeComponent {
    constructor(_rentService) {
        this._rentService = _rentService;
        this.rents = [];
    }
    ngOnInit() {
        this.rents = this._rentService.getRents();
    }
};
EmployeeComponent = __decorate([
    Component({
        selector: 'app-employee',
        templateUrl: './employee.component.html',
        styleUrls: ['./employee.component.css']
    })
], EmployeeComponent);
export { EmployeeComponent };
//# sourceMappingURL=employee.component.js.map