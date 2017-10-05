import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserTodoService } from './user-todo-service';


export class user {
  userId: number;
  title: string;
  id: number;
  completed: false;
  updateTitle: string
}


@Component({
  selector: 'app-user-todo',
  templateUrl: './user-todo.component.html',
  styleUrls: ['./user-todo.component.css']
})
export class UserTodoComponent implements OnInit {
  private id;
  private stateParams;
  userDetail;
  userDetails;
  errorMessage;
  adduserDetail;
  buttonText;
  user: user = {
    userId: this.id,
    title: '',
    id: 0,
    completed: false,
    updateTitle: ''

  };
  constructor(private userTodoService: UserTodoService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.buttonText = 'Add';

    this.stateParams = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
      console.log("stateParams", this.id);

    });

    this.getUserDetails();

  }
  getUserDetails() {
    this.userDetail = this.userTodoService.getUserDetails(this.id);
    this.userDetail.then(
      users => {
        console.log("userDeatils", users);
        this.userDetails = users
      },
      error => {
        console.log("userDeatils", error);
        this.errorMessage = <any>error
      }
    );
  }
  addNewUserTodoList(data, title) {
    console.log("user details", data);
    if (data) {
      let index = this.userDetails.findIndex(todo => todo.id === data.id);
      this.userDetails[index].title = title;
      this.userDetails[index].editing = false
      return;
    }
    if (!this.user.title) {
      console.log("user title empty");
      return;
    }
    console.log("user details", this.user);

    this.userDetails.push({
      userId: this.id,
      title: this.user.title,
      id: this.userDetails.length + 1,
      completed: false
    });
    this.user.title = '';



    // this.adduserDetail = this.userTodoService.addUserDetails(this.user);
    // this.adduserDetail.then(
    //   users => {
    //     console.log("adduserDeatils", users);
    //     this.getUserDetails();
    //   },
    //   error => {
    //     console.log("userDeatils", error);
    //     this.errorMessage = <any>error
    //   }
    // );

  }
  editNewUserTodoList(todo) {
    this.user.id = todo.id;
    this.user.title = todo.title;
    this.buttonText = 'Update';

  }
  updateUserTodoList(data) {



    // console.log("user details", this.user);
    // this.adduserDetail = this.userTodoService.updateUserDetails(this.user);
    // this.adduserDetail.then(
    //   users => {
    //     console.log("adduserDeatils", users);
    //     this.getUserDetails();
    //   },
    //   error => {
    //     console.log("userDeatils", error);
    //     this.errorMessage = <any>error
    //   }
    // );

  }

  deleteUserTodoList(id) {
    let index = this.userDetails.findIndex(todo => todo.id === id);
    this.userDetails.splice(index, 1);
    // this.adduserDetail = this.userTodoService.deleteUserDetails(id);
    // this.adduserDetail.then(
    //   users => {
    //     console.log("deleteUserDetails", users);
    //     this.getUserDetails();
    //   },
    //   error => {
    //     console.log("deleteUserDetails", error);
    //     this.errorMessage = <any>error
    //   }
    // );

  }
}
