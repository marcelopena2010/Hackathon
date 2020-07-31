import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-people-menu',
  templateUrl: './people-menu.component.html',
  styleUrls: ['./people-menu.component.scss']
})

export class PeopleMenuComponent implements OnInit {

  constructor(public location: Location) {}
  ngOnInit(){}
  refresh(path): void {
    window.location.href = path;
  }

}
