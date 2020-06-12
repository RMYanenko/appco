import { Component, OnInit } from '@angular/core';
export interface UsersStat {
  id: number,
  firstName: string,
  lastName: string,
  email: string,
  gender: string,
  totalClicks: number,
  totalPageViews: number,
  ipAddress: string
}
@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  titlePage = 'Users statistics';

 usersStats:any = [
    {
      "id": 1,
      "firstName": "Christie",
      "lastName": "Gann",
      "email": "cgann0@hostgator.com",
      "gender": "Female",
      "totalClicks": 13469,
      "totalPageViews": 15299,
      "ipAddress": "57.14.195.231"
    },
    {
      "id": 2,
      "firstName": "Bob",
      "lastName": "Smit",
      "email": "smit0@hostgator.com",
      "gender": "Male",
      "totalClicks": 23469,
      "totalPageViews": 45291,
      "ipAddress": "25.14.195.132"
      },
      {
        "id": 3,
        "firstName": "Bob",
        "lastName": "Smit",
        "email": "smit0@hostgator.com",
        "gender": "Male",
        "totalClicks": 23469,
        "totalPageViews": 45291,
        "ipAddress": "25.14.195.132"
        }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
