import { Component, OnInit } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';
import { API_KEY } from 'src/app/constants/app.constants';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  public contactInfo = [
    {
      icon: 'phone',
      title: 'PHONE NUMBER',
      contact: '+381 66 123 456',
    },
    {
      icon: 'linkedin-box',
      title: 'LINKEDIN',
      contact: 'https://www.linkedin.com/company/ski-surf-shop/about/',
    },
    {
      icon: 'place',
      title: 'OFFICE LOCATION',
      contact: 'Jove Ilića 154, Belgrade 11000',
    },
    {
      icon: 'email',
      title: 'EMAIL',
      contact: 'skishop@gmail.com',
    },
  ];

  public location = { lat: 44.772680910933126, lng: 20.475221398206017 };

  constructor() {}

  ngOnInit(): void {
    let loader = new Loader({
      apiKey: API_KEY,
    });

    loader.load().then(() => {
      const map = new google.maps.Map(
        document.getElementById('map') as HTMLElement,
        {
          center: this.location,
          zoom: 18,
        }
      );

      new google.maps.Marker({
        position: this.location,
        map: map,
      });
    });
  }
}
