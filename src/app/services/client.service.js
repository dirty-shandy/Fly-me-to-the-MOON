import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let clientService = class clientService {
    constructor() {
        this.client = [
            {
                User_Name: 'alex1987',
                Full_Name: 'alex',
                userID: 1,
                Date_of_birth: new Date('06/08/1987'),
                Gender: 'Male',
                Email: 'alex@alex.com',
                Password: 1234,
                pic: 'assets/clientpic.png',
                isActive: true,
                PhotoPath: null,
                previewPhoto: false
            },
            {
                User_Name: 'AlmaQueen',
                Full_Name: 'alma',
                userID: 2,
                Date_of_birth: new Date('01/01/2016'),
                Gender: 'Female',
                Email: 'Alma@malinois.com',
                Password: 4321,
                pic: 'assets/spaceDog.jpg',
                isActive: true,
                PhotoPath: null,
                previewPhoto: false,
            },
        ];
    }
    getClient() {
        return this.client;
    }
    save(client) {
        this.client.push(client);
    }
};
clientService = __decorate([
    Injectable()
], clientService);
export { clientService };
//# sourceMappingURL=client.service.js.map