import { Component, OnInit } from '@angular/core';
import { DataService} from '../services.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user:any = [];

  constructor(private dsObj : DataService) { }

  ngOnInit() { this.dsObj.getUsers().subscribe( d => {
    this.user = d;
  })
  }

}
