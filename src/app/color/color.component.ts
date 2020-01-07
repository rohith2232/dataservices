import { Component, OnInit } from '@angular/core';
import {DataService} from '../services.service';
@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
  color: Object;

  constructor( private cr : DataService) { }

  ngOnInit() {
    this.cr.getcolor().subscribe(d => {
      this.color=d;
    })
  }

}
