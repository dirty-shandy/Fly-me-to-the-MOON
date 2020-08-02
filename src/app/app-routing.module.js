import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CarsComponent } from './component/cars/cars.component';
import { ClientComponent } from './component/client/client.component';
import { EmployeeComponent } from './component/employee/employee.component';
import { ManagerComponent } from './component/manager/manager.component';
import { HomeComponent } from './component/home/home.component';
import { Car1Component } from './component/cars/car1/car1.component';
import { Car2Component } from './component/cars/car2/car2.component';
import { Car3Component } from './component/cars/car3/car3.component';
import { Car4Component } from './component/cars/car4/car4.component';
import { Car5Component } from './component/cars/car5/car5.component';
import { AboutComponent } from './about/about.component';
import { RentComponent } from './component/rent/rent.component';
import { NewClientComponent } from './component/client/new-client/new-client.component';
const routes = [
    { path: "", redirectTo: "/Home", pathMatch: "full" },
    { path: "Home", component: HomeComponent },
    { path: "cars", component: CarsComponent },
    { path: "car1", component: Car1Component },
    { path: "car2", component: Car2Component },
    { path: "car3", component: Car3Component },
    { path: "car4", component: Car4Component },
    { path: "car5", component: Car5Component },
    { path: "rent", component: RentComponent },
    { path: "client", component: ClientComponent },
    { path: "create new client", component: NewClientComponent },
    { path: "login", component: ClientComponent },
    { path: "employee", component: EmployeeComponent },
    { path: "manager", component: ManagerComponent },
    { path: "about", component: AboutComponent },
    { path: "**", redirectTo: "/home", pathMatch: "full" }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map