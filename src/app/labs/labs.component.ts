import {Component, OnInit} from '@angular/core';
import {TreeNode} from 'primeng/api';

@Component({
  selector: 'app-labs',
  templateUrl: './labs.component.html',
  styleUrls: ['./labs.component.scss']
})
export class LabsComponent implements OnInit {
  data1: TreeNode[];
  selectedNode: TreeNode;
  admin: boolean;
  constructor() {
  }

  ngOnInit(): void {
    this.admin = true;
    this.data1 = [{
      label: 'CMMRAPI',
      type: 'person',
      styleClass: 'p-person',
      expanded: true,
      data: {},
      children: [
        {
          label: 'A. Jadlovska',
          type: 'person',
          styleClass: 'p-person',
          expanded: true,
          data: {},
          children: [{
            label: 'Doktorand 1',
            styleClass: 'department-cfo'
          }, {
            label: 'Doktorand 2',
            styleClass: 'department-cfo'
          }, {
            label: 'Doktorand 2',
            styleClass: 'department-cfo'
          },
            {
              label: 'Doktorand 2',
              styleClass: 'department-cfo'
            }],
        },
        {
          label: 'J. Jadlovsky',
          type: 'person',
          styleClass: 'p-person',
          expanded: true,
          data: {},
          children: [{
            label: 'Doktorand 1',
            styleClass: 'department-coo'
          }, {
            label: 'Doktorand 2',
            styleClass: 'department-cfo'
          },{
            label: 'Doktorand 2',
            styleClass: 'department-coo',
          }, {
            label: 'Doktorand 2',
            styleClass: 'department-cfo'
          }, {
            label: 'Doktorand 2',
            styleClass: 'department-cfo'
          }]
        },
        {
          label: 'S. Jadlovska',
          type: 'person',
          styleClass: 'p-person',
          expanded: true,
          data: {},
          children: [{
            label: 'Doktorand 1',
            styleClass: 'department-coo'
          },{
            label: 'Doktorand 2',
            styleClass: 'department-coo',
          }]
        }
      ]
    }];
  }


}
