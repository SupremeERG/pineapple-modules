import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { beefhookerComponent } from './components/beefhooker.component';
import { RouterModule, Routes } from '@angular/router';

import {MaterialModule} from './modules/material/material.module';
import {FlexLayoutModule} from '@angular/flex-layout';

import {FormsModule} from '@angular/forms';

const routes: Routes = [
    { path: '', component: beefhookerComponent }
];

@NgModule({
    declarations: [beefhookerComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        MaterialModule,
        FlexLayoutModule,
        FormsModule,
    ],
    exports: [beefhookerComponent]
})
export class beefhookerModule { }
