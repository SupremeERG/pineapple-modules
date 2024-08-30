import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';

@Component({
    selector: 'lib-beefhooker',
    templateUrl: './beefhooker.component.html',
    styleUrls: ['./beefhooker.component.css']
})
export class beefhookerComponent implements OnInit {
    options: FormGroup;
    floatLabelControl = new FormControl('auto');

    constructor(private API: ApiService, fb: FormBuilder) { 
        this.options = fb.group({
            floatLabel: this.floatLabelControl,
        });
    }


    doAPIAction(): void {
        this.API.request({
            module: "beefhooker",
            action: "hello_world",
        }, (response) => {
            document.getElementById("buttonres").textContent = response
            console.log(response)
        })
    }


    ngOnInit() {
    }
}
