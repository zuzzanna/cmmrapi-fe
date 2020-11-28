import {Component, OnInit} from '@angular/core';
import {Message, SelectItem} from 'primeng/api';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {

  sortOptions: SelectItem[];

  sortOrder: number;

  sortField: string;

  images: any[];

  news: any[];
  admin: boolean;

  ngOnInit() {
    this.admin = true;
    this.images = [
      {
        source: '/assets/img/Board51/IMG_0374.JPG',
      },
      {
        source: '/assets/img/Board51/IMG_0376.JPG',
      },
      {
        source: '/assets/img/Board51/IMG_0375.JPG',
      },
      {
        source: '/assets/img/Board51/IMG_0377.JPG',
      },
    ];

    this.news = [
      {
        desctiption: 'Výskumné laboratórium nelineárnych ',
        image: 'IMG_0374.JPG',
        date: '25.6.2020'
      }, {
        desctiption: 'nelineárnych podaktuovaných systémo',
        image: ' ',
        date: ''
      }, {
        desctiption: 'báze 5-úrovňového pyramídového modelu DSR reali',
        image: ' ',
        date: ''
      }, {
        desctiption: ' programovej a technickej stránke sme vybavení najmod',
        image: ' ',
        date: ''
      }, {
        desctiption: '',
        image: ' ',
        date: ''
      }
    ];

    this.sortOptions = [
      {label: 'Dátum', value: '!date'},
      {label: 'Dátum', value: 'date'}
    ];
  }


}
