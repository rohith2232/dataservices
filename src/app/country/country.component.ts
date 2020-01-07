import { Component, OnInit } from '@angular/core';
import { DataService} from '../services.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {

  countries: any = [];
  constructor(private sr: DataService) { }

  ngOnInit() {
    this.sr.getCountries().subscribe(d => {
      this.countries = d;
    })
  }
}