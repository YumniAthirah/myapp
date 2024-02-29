import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { TableModule } from 'primeng/table';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [TableModule, HttpClientModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent implements OnInit{
  users: any;

  constructor(private userService: UserService){}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(){
    this.userService.getUsers().subscribe((users) => {
      console.log(users);
      this.users = users;
    })
  }


}
