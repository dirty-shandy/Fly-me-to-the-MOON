import { __decorate } from "tslib";
import { Component } from '@angular/core';
let MainComponent = class MainComponent {
    constructor(h) {
        h.get("http://localhost:52366/api/users")
            .subscribe(t => { this.UserTable = t; });
    }
    ngOnInit() {
    }
};
MainComponent = __decorate([
    Component({
        selector: 'app-main',
        templateUrl: './main.component.html',
        styleUrls: ['./main.component.css']
    })
], MainComponent);
export { MainComponent };
//# sourceMappingURL=main.component.js.map