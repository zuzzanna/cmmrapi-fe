import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-cern',
  templateUrl: './cern.component.html',
  styleUrls: ['./cern.component.scss']
})
export class CernComponent implements OnInit {
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
