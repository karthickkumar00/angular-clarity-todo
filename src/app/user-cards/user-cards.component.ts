import { Component, OnInit } from '@angular/core';
import { UserCardsService } from './user-cards-service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-cards',
  templateUrl: './user-cards.component.html',
  styleUrls: ['./user-cards.component.css']
})
export class UserCardsComponent implements OnInit {
  userList;
  userLists;
  errorMessage;
  constructor(private userCardsService: UserCardsService, private router: Router) { }

  ngOnInit() {

    this.userList = this.userCardsService.getUserList();
    this.userList.then(
      users => {
        console.log(users);
        this.userLists = users
      },
      error => {
        console.log(error);
        this.errorMessage = <any>error
      }
    );
  }
  

  navigateToUserTodo(id) {
    this.router.navigate(['/user-todo', id]);
  }
}
