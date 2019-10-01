import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ReactiveFormsModule } from '@angular/forms';

import { LoggerService } from './logger.service';
import { throwIfAlreadyLoaded } from './module-import-guard';

import { CoreRoutingModule } from './core-routing.module';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AppMaterialModule } from '../app-material/app-material.module';
import { RegisterComponent } from './register/register.component';
import { LandingComponent } from './landing/landing.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        AppMaterialModule,
        CoreRoutingModule,
        ReactiveFormsModule
    ],
    exports: [
        RouterModule,
        HeaderComponent,
    ],
    declarations: [HeaderComponent, LoginComponent, NotFoundComponent, RegisterComponent, LandingComponent, DashboardComponent, FooterComponent],
    providers: [LoggerService]
})
export class CoreModule {
    /* make sure CoreModule is imported only by one NgModule the AppModule */
    constructor(
        @Optional() @SkipSelf() parentModule: CoreModule
    ) {
        throwIfAlreadyLoaded(parentModule, 'CoreModule');
    }
}
