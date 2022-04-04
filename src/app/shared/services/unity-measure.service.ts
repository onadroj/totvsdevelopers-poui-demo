import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PoLookupFilter, PoLookupFilteredItemsParams, PoLookupResponseApi } from '@po-ui/ng-components';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UnityMeasureService implements PoLookupFilter {

  constructor(
    private http: HttpClient
  ) { }
  
  getObjectByValue(value: string | any[], filterParams?: any): Observable<any> {
    return this.http.get<PoLookupResponseApi>(`/api/v1/unity-measure/${value}`);
  }

  getFilteredItems?(params: PoLookupFilteredItemsParams): Observable<PoLookupResponseApi> {
    return this.http.get<PoLookupResponseApi>(`/api/v1/unity-measure`);
  }
}
