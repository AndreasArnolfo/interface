import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {DataService} from '../shared/data.service';
import {ActivatedRoute, Router} from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import {MatSnackBar} from '@angular/material';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  errorMsg: string;
  successMsg: string;

  constructor(private dataService: DataService, private router: Router, private toastr: ToastrService, public snackBar: MatSnackBar) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.minLength(1)]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    });
  }
  get username() {
    return this.loginForm.get('username');
  }
  get password() {
    return this.loginForm.get('password');
  }
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, null, {
      duration: 2000,
    });
  }
  login = function () {
    const userinput = this;
    const user = {
      username: userinput.username.value,
      password: userinput.password.value
    };
    const body: string = JSON.stringify(user);
    if (!userinput.username.value || !userinput.password.value) {
      this.toastr.error('Please provide a username and a password.');
    } else {
      this.dataService.loginUser(body).subscribe(x => {
          this.openSnackBar('Successful login');
          if (x.token) {
            this.router.navigate(['/contacts']);
          }
        }, error => {
          this.openSnackBar('Invalid username or password');
        });
    }
  };
}
