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
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
