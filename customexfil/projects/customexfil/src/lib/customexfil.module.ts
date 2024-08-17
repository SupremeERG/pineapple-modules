import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { customexfilComponent } from './components/customexfil.component';
import { RouterModule, Routes } from '@angular/router';

import {MaterialModule} from './modules/material/material.module';
import {FlexLayoutModule} from '@angular/flex-layout';

import {FormsModule} from '@angular/forms';

const routes: Routes = [
    { path: '', component: customexfilComponent }
];

@NgModule({
    declarations: [customexfilComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        MaterialModule,
        FlexLayoutModule,
        FormsModule,
    ],
    exports: [customexfilComponent]
})
export class customexfilModule { }
