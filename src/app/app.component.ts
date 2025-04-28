import { HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';
import { Component, OnInit, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CountryLookupService } from './country-lookup.service'
import { Country } from './interface/Country';
import { Observable } from 'rxjs';
import { NgIf } from '@angular/common';
import { event } from 'jquery';




@Component({
  selector: 'app-root', 
  standalone: true,
  imports: [RouterOutlet,HttpClientModule, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css', 
  schemas:[NO_ERRORS_SCHEMA]
})
export class AppComponent  {
constructor(private countryService: CountryLookupService)  {}

Countrytable=false
Country:Country={}

//function that gets id from the svg then passes to the lookupservice
onMouseEnter(event: MouseEvent): void { 
  const mytarget=event.target as SVGPathElement
  const Countryid= mytarget?.getAttribute("id")
  if (Countryid) {
    this.countryService.getCountry(Countryid)
      .subscribe(response => {
        //maps each response
       console.log("Country",response[1][0]);
        this.Country.id=response[1][0]["id"]
        this.Country.iso2Code=response[1][0]["iso2Code"]
        this.Country.name=response[1][0]["name"]
        this.Country.adminregion=response[1][0]["adminregion"]
        this.Country.incomeLevel=response[1][0]["incomeLevel"]
        this.Country.lendingType=response[1][0]["lendingType"]
        this.Country.region=response[1][0]["region"]
        this.Country.capitalCity=response[1][0]["capitalCity"]
        this.Country.longitude=response[1][0]["longitude"]
        this.Country.latitude=response[1][0]["latitude"]
        console.log(this.Country,"Country")
this.Countrytable=true
      });
  }
}

  
title='d280'

}


