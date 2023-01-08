import { Component, OnInit } from '@angular/core';
import { ImageService } from 'src/app/services/image.service';

import { VCard } from "ngx-vcard";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(public imageService: ImageService) { }

  public firstName: string = 'Rebecca';
  public lastName: string = 'Graham';
  public businessName: string = 'Rebecca Graham, Teacher and Leader Development LLC';
  public occupation: string = 'Educational Consultant';
  public phoneNumber: string = '404-309-3455';
  public email: string = 'rebecca.graham.theconsultant@gmail.com';

  // 'Rebecca Graham, Teacher and Leader Development LLC';

  ngOnInit() {
  }

  public vCard: VCard = {
    name: {
      firstNames: this.firstName,
      lastNames: this.lastName,
    },
    telephone: [this.phoneNumber],
    email: [this.email],
    workEmail: [this.email],
    role: `CEO of ${this.businessName}`,
    url: "https://www.linkedin.com/in/rebecca-graham-m-ed-394446231/",
  };
}
