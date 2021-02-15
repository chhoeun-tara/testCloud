import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../environments/environment.prod";

@Injectable({
  providedIn: "root",
})
export class RestapiService {
  constructor(private http: HttpClient) {}
  getData() {
    // return this.http.get(`http://ecom-api.redfox-ws.com/api/public-products`);
    return this.http.get(`${environment.apiURL}/public-products`);
  }
}
