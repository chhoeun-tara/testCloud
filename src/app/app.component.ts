import { Component, OnInit } from "@angular/core";
import { RestapiService } from "./restapi.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  title = "testcloud";
  dataTable = [];
  constructor(private restApiService: RestapiService) {}
  ngOnInit() {
    this.restApiService.getData().subscribe(
      (res: any) => {
        this.dataTable = res.data;
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
