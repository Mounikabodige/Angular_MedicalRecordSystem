import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { User } from '../user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user : User = null;
  
  constructor(private toastr: ToastrService)  { }

  ngOnInit(): void {
  }
  onRegister(): void{
    console.log(this.user.email);
    this.toastr.success('Registered Succefully','Success');
  }
  cancel(): void{
    this.toastr.warning('Registeration Canceled','Warning');
  }
}
