import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Country } from './interface/Country';



@Injectable({
  providedIn: 'root'
})

export class CountryLookupService {
  
  private readonly apiUrl: string = 'https://api.worldbank.org/v2/country';
  constructor(private http: HttpClient) { }

//API function that gets a country using iso2Code
  getCountry(iso2Code: any): Observable<any>{
    return this.http.get<any>(`${this.apiUrl}/${iso2Code}/?format=json`)
    }
}
