import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
    selector: 'lib-customexfil',
    templateUrl: './customexfil.component.html',
    styleUrls: ['./customexfil.component.css']
})
export class customexfilComponent implements OnInit {
    constructor(private API: ApiService) { }

    apiResponse = 'Press the button above to get the version';


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
    }
}
