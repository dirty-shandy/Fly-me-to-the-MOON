import { __decorate } from "tslib";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { MainComponent } from './main/main.component';
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
import { RouterModule } from '@angular/router';
import { NewClientComponent } from './component/client/new-client/new-client.component';
import { FormsModule } from '@angular/forms';
import { clientService } from './services/client.service';
import { RentService } from './services/rent.service';
let AppModule = class AppModule {
};
AppModule = __decorate([
    NgModule({
        declarations: [
            AppComponent,
            HeaderComponent,
            MenuComponent,
            MainComponent,
            CarsComponent,
            ClientComponent,
            EmployeeComponent,
            ManagerComponent,
            HomeComponent,
            Car1Component,
            Car2Component,
            Car3Component,
            Car4Component,
            Car5Component,
            AboutComponent,
            RentComponent,
            NewClientComponent,
        ],
        imports: [
            BrowserModule,
            FormsModule,
            AppRoutingModule,
            HttpClientModule,
            RouterModule
        ],
        providers: [clientService, RentService],
        bootstrap: [AppComponent]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map