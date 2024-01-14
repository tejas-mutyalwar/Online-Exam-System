import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{

  constructor(private userService : UserService, private snack : MatSnackBar, private router : Router) {}

  public user = {
    userName : '',
    firstName : '',
    lastName : '',
    email : '',
    phone : '',
    password : '',
    roles: ["TEACHER"]
  };

  ngOnInit(): void {
  }

  formSubmit() {
    console.log(this.user);
    if(this.user.userName == '' || this.user.userName == null) {
      //alert("user name is required");
      this.snack.open("UserName is required !!! ", "", {
        duration : 2000
        // verticalPosition : 'top',
        // horizontalPosition : 'right'
      });
      return;
    }

    //add user
    console.log("calling addUser ...");
    this.userService.addUser(this.user).subscribe(
      {
        next : (data:any) => {
          //console.log(data);
          Swal.fire('Success !!', 'UserID : ' + data.id, 'success').then((t) => {
            this.router.navigate(["login"])
            Swal.fire("Please Login again !!")
          });
          

        },
        error : (error) => this.snack.open(error, '', {
          duration : 2000
        }),
        complete : () => console.log("complete")
      }
    );

  }
  
}
