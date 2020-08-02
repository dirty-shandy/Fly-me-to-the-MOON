import { __decorate } from "tslib";
import { Component } from '@angular/core';
let NewClientComponent = class NewClientComponent {
    constructor(_clientService, _router) {
        this._clientService = _clientService;
        this._router = _router;
        this.client = {
            Full_Name: null,
            User_Name: null,
            userID: null,
            Email: null,
            Gender: null,
            Password: null,
            isActive: null,
            Date_of_birth: null,
            PhotoPath: null,
            previewPhoto: false
        };
    }
    togglePhotoPreview() {
        this.previewPhoto = !this.previewPhoto;
    }
    ngOnInit() {
    }
    saveNewClient() {
        this._clientService.save(this.client);
        this._router.navigate(['manager']);
    }
};
NewClientComponent = __decorate([
    Component({
        selector: 'app-new-client',
        templateUrl: './new-client.component.html',
        styleUrls: ['./new-client.component.css']
    })
], NewClientComponent);
export { NewClientComponent };
//# sourceMappingURL=new-client.component.js.map