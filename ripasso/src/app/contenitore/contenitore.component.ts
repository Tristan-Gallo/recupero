import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contenitore',
  templateUrl: './contenitore.component.html',
  styleUrls: ['./contenitore.component.css']
})
export class ContenitoreComponent implements OnInit {
nomi:string[]
  constructor() {
    this.nomi = ['pino','gino','tino','luca','tristan']
   }

  ngOnInit(): void {
  }

}
