import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  editorInput: string;
  admin: boolean;

  constructor() {
  }

  ngOnInit(): void {
    this.admin = false;
  }

  action() {
    console.log(this.editorInput);
  }

}
