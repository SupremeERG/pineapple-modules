import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
    selector: 'lib-customexfil',
    templateUrl: './customexfil.component.html',
    styleUrls: ['./customexfil.component.css']
})
export class customexfilComponent implements OnInit {
    constructor(private API: ApiService) {
    }
    
    apiResponse = 'Press the button above to get the version';
    selectedExfilMethod = "discord";
    selectedExfilInterval = "1hr";

    onExfilMethodSelect(): void {
        this.selectedExfilMethod = "test";
        console.log("changed val", this.selectedExfilMethod)
    }

    onExfilIntervalSelect(): void {
        this.selectedExfilInterval = "test";
        console.log("changed val", this.selectedExfilInterval)
    }

    doAPIAction(): void {
        console.log("testtesttest")
        this.API.request({
            module: "customexfil",
            action: "hello_world"
        }, (response) => {
            console.log(response)
            document.getElementById("targetspan").textContent = response
        });
        console.log("request finished")
    }

    ngOnInit() {
        
        if (this.selectedExfilInterval == "30min") {
            console.log("30 minutes")
        }
    }
}
