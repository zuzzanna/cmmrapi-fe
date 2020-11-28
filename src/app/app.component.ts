import {Component, OnInit} from '@angular/core';
import {MegaMenuItem} from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  items: MegaMenuItem[];
  visibleSidebar2;

  ngOnInit() {
    /* {label: 'Recent Files', icon: 'pi pi-download', routerLink: ['/pagename'], queryParams: {'recent': 'true'}}*/
    this.items = [
      {
        label: 'Domov',
        routerLink: ['/']
      },
      {
        label: 'Infraštruktúra',
        routerLink: ['/infrastructure']
      },
      {
        label: 'Laboratória',
        routerLink: '/labs',
      },{
        items: [
          [
            {
              label: 'Laboratória',
              items: [
                {label: 'Laboratórium počítačových riadiacich systémov V146 (V101b)'},
                {label: 'Laboratórium počítačových riadiacich systémov V146 (V101b)'},
                {label: 'Laboratórium počítačových riadiacich systémov V146 (V101b)'},
                {label: 'Laboratórium počítačových riadiacich systémov V146 (V101b)'},
                {label: 'Laboratórium počítačových riadiacich systémov V146 (V101b)'},
                {label: 'Event 1.2'}
              ]
            }
          ],
          [
            {
              label: 'Sieť centra',
              items: [{label: 'Event 2.1'}, {label: 'Event 2.2'}]
            }
          ]
        ]
      },
      {
        label: 'Členovia',
        routerLink: '/people',
      },{
        items: [
          [
            {
              label: 'Profesori',
              items: [{label: 'Setting 1.1'}, {label: 'Setting 1.2'}]
            },
            {
              label: 'Odborní asistenti',
              items: [{label: 'Setting 2.1'}, {label: 'Setting 2.2'}]
            },
            {
              label: 'Externí členovia',
              items: [{label: 'Setting 3.1'}, {label: 'Setting 3.2'}]
            }
          ],
          [
            {
              label: 'Docenti',
              items: [{label: 'Setting 4.1'}, {label: 'Setting 4.2'}]
            },
            {
              label: 'Doktorandi',
              items: [{label: 'Setting 4.1'}, {label: 'Setting 4.2'}]
            },
            {
              label: 'Bývalí členovia',
              items: [{label: 'Setting 4.1'}, {label: 'Setting 4.2'}]
            }
          ]
        ]
      },
      {
        label: 'Predmety'},{
        items: [
          [
            {
              label: 'Laboratória',
              items: [
                {label: 'Laboratórium počítačových riadiacich systémov V146 (V101b)'},
                {label: 'Laboratórium počítačových riadiacich systémov V146 (V101b)'},
                {label: 'Laboratórium počítačových riadiacich systémov V146 (V101b)'},
                {label: 'Laboratórium počítačových riadiacich systémov V146 (V101b)'},
                {label: 'Laboratórium počítačových riadiacich systémov V146 (V101b)'},
                {label: 'Event 1.2'}
              ]
            }
          ],
          [
            {
              label: 'Sieť centra',
              items: [{label: 'Event 2.1'}, {label: 'Event 2.2'}]
            }
          ]
        ]
      },
      {
        label: 'Modely'},{
        items: [
          [
            {
              label: 'Laboratória',
              items: [
                {label: 'Laboratórium počítačových riadiacich systémov V146 (V101b)'},
                {label: 'Laboratórium počítačových riadiacich systémov V146 (V101b)'},
                {label: 'Laboratórium počítačových riadiacich systémov V146 (V101b)'},
                {label: 'Laboratórium počítačových riadiacich systémov V146 (V101b)'},
                {label: 'Laboratórium počítačových riadiacich systémov V146 (V101b)'},
                {label: 'Event 1.2'}
              ]
            }
          ],
          [
            {
              label: 'Sieť centra',
              items: [{label: 'Event 2.1'}, {label: 'Event 2.2'}]
            }
          ]
        ]
      },
      {
        label: 'Výskum'},{
        items: [
          [
            {
              label: 'Laboratória',
              items: [
                {label: 'Laboratórium počítačových riadiacich systémov V146 (V101b)'},
                {label: 'Laboratórium počítačových riadiacich systémov V146 (V101b)'},
                {label: 'Laboratórium počítačových riadiacich systémov V146 (V101b)'},
                {label: 'Laboratórium počítačových riadiacich systémov V146 (V101b)'},
                {label: 'Laboratórium počítačových riadiacich systémov V146 (V101b)'},
                {label: 'Event 1.2'}
              ]
            }
          ]
        ]
      },
      {
        label: 'Galéria'},{
        items: [
          [
            {
              label: 'Profesori',
              items: [{label: 'Setting 1.1'}, {label: 'Setting 1.2'}]
            },
            {
              label: 'Odborní asistenti',
              items: [{label: 'Setting 2.1'}, {label: 'Setting 2.2'}]
            },
            {
              label: 'Externí členovia',
              items: [{label: 'Setting 3.1'}, {label: 'Setting 3.2'}]
            }
          ],
          [
            {
              label: 'Docenti',
              items: [{label: 'Setting 4.1'}, {label: 'Setting 4.2'}]
            },
            {
              label: 'Doktorandi',
              items: [{label: 'Setting 4.1'}, {label: 'Setting 4.2'}]
            },
            {
              label: 'Bývalí členovia',
              items: [{label: 'Setting 4.1'}, {label: 'Setting 4.2'}]
            }
          ]
        ]
      },
      {
        label: 'Cern',
        routerLink: '/cern',
      },
      {
        label: 'O nás',
        routerLink: '/about',
      }
    ];
  }
}
