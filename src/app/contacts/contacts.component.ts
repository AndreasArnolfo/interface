import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';
import {ActivatedRoute, Router} from '@angular/router';

export interface Section {
  name: string;
  updated: Date;
  img: string;
}
@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})

export class ContactsComponent implements OnInit {
  contacts = [];
  mynumber;
  constructor(private dataService: DataService, private router: Router) {
    const userObj = JSON.parse(localStorage.getItem('user'));
    if (userObj) {
      this.mynumber = userObj.phone;
    }
    this.dataService.getcontacts().subscribe(x => {
      this.contacts = x;
    }, error => {
      console.log(error);
    });
  }
  updateMyPhone() {
    const userObj = JSON.parse(localStorage.getItem('user'));
    const reqObj = {
      phone: this.mynumber
    };
    if (this.mynumber) {
      this.dataService.updateUser(userObj._id, reqObj).subscribe(x => {
        userObj.phone = this.mynumber;
        localStorage.setItem('user', JSON.stringify(userObj));
      }, error => {
        console.log(error);
      });
    }
  }
  videoDetailNavigate() {
    this.router.navigate(['videodetail/:id']);

  }
  ngOnInit() {
  }
}
