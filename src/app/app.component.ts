import { Component } from '@angular/core';
import { User } from './models/User';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-hw6';
  
  userList: User[];
  user: User;
  // userId = 0;
  userId: number;

  constructor(private userService: UserService) {
    this.userService.getUsers().subscribe(value => {
      console.log('----userList-----',value);
      this.userList = value;
      console.log('id', this.user.id);
      
    })
  }
  
  select(id: number): void {
    this.userService.getOneUserFromId(id).subscribe(value => {
      console.log('-----this.user---',value);
      this.user = value;
      console.log('----id----',id);
      console.log('----userId----', this.userId);
    })
  }
}
