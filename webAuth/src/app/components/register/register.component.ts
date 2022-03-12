import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public registerForm = this.formBuilder.group({
    fullName:['', Validators.required],
    email:['', Validators.required],
    password:['', Validators.required]
  })

  constructor(private formBuilder:FormBuilder,private userService:UserService) { }

  ngOnInit(): void {
  }

  onSubmit()
  {
    console.log("on Submit");

    let fullName = this.registerForm.controls["fullname"].value;
    let email = this.registerForm.controls["email"].value;
    let password = this.registerForm.controls["password"].value;

    this.userService.register(fullName,email,password).subscribe((data)=>{
      console.log("response",data);
    })
  }
}
