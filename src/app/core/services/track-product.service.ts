import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { map, tap } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class TrackProductService {
  endpoint = "track-products";
  constructor(private http: HttpClient) {}

  getTrackingProducts(params = {}): Observable<any> {
    return this.http
      .get<any>(`${environment.apiUrl}/${this.endpoint}/me`, { params: params })
      .pipe(
        map((res) => {
          console.log(
            "🚀 ~ file: board.service.ts ~ line 39 ~ BoardService ~ map ~ res",
            res
          );
          // may be return with pagiantion or without pagination
          return res;
        })
      );
  }

  addProductForTracking(model, options = {}) {
    return this.http
      .post<any>(`${environment.apiUrl}/${this.endpoint}`, model, options)
      .pipe(
        map((res) => {
          console.log(
            "🚀 ~ file: board.service.ts ~ line 39 ~ BoardService ~ map ~ res",
            res
          );
          // may be return with pagiantion or without pagination
          return res;
        }),
        tap(res => {
          ;
          return res;
        })
      );
  }
}
