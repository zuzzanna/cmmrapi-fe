import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-infrastructure',
  templateUrl: './infrastructure.component.html',
  styleUrls: ['./infrastructure.component.scss']
})
export class InfrastructureComponent implements OnInit {

  editorInput: string;

  myThumbnail="http://kyb.fei.tuke.sk/laboratoria/IMG/infsys.jpg";
  myFullresImage="http://kyb.fei.tuke.sk/laboratoria/IMG/infsys.jpg";

  constructor() {
  }

  ngOnInit() {
  }

  action() {
    console.log(this.editorInput);
  }
}
