import { Component, OnInit } from '@angular/core';

import { Person } from '../person';

import {PERSONS } from '../mock-persons';

@Component({
  selector: 'app-mycmpnnt',
  templateUrl: './mycmpnnt.component.html',
  styleUrls: ['./mycmpnnt.component.css']
})
export class MycmpnntComponent implements OnInit {
  
  person: Person = 
  {
    id: 1,
    firstName:'ALEXey',
    lastName:'MELnik',
    age: 42,
    salary: 25000
  };

  persons = PERSONS;

  constructor() { }

  ngOnInit() {
  }

}
