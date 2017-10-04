import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { UserCardsComponent } from './user-cards/user-cards.component';
import { UserTodoComponent } from './user-todo/user-todo.component';


const appRoutes: Routes = [
 { path: 'users', component: UserCardsComponent },
 { path: 'user/todo', component: UserTodoComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    UserCardsComponent,
    UserTodoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
