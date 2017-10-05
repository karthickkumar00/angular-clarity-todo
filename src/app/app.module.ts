import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { UserCardsComponent } from './user-cards/user-cards.component';
import { UserTodoComponent } from './user-todo/user-todo.component';
import { HttpModule } from '@angular/http';
import { UserCardsService } from './user-cards/user-cards-service';
import { UserTodoService } from './user-todo/user-todo-service';
import { FormsModule } from '@angular/forms';

const appRoutes: Routes = [
  { path: 'users', component: UserCardsComponent },
  { path: 'user-todo/:id', component: UserTodoComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    UserCardsComponent,
    UserTodoComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [
    UserCardsService,
    UserTodoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
