import { Component, OnInit } from "@angular/core";
import { GetDataService } from "../app/services/get-data-service.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  private title = "ytDemo";
  private displayData: any;
  constructor(private __dataService: GetDataService) {}

  ngOnInit() {
    this.__dataService
      .getData()
      .subscribe((results) =>{
        this.displayData = results;
        console.log(results)
      }
       );
  }
}
