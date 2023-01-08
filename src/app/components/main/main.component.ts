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
  public occupation: string = 'Educational Consultant';
  public phoneNumber: string = '404-309-3455';
  public email: string = 'rebecca.graham.theconsultant@gmail.com';

  // 'Rebecca Graham, Teacher and Leader Development LLC';

  ngOnInit() {
  }

  public vCard: VCard = {
    name: {
      firstNames: "Rebecca",
      lastNames: "Graham",
    },
    telephone: ["912-536-7419"],
    email: ["skirkland.job@gmail.com"],
    workEmail: ["kirklandenterprisesunlimited@gmail.com"],
    role: "CEO of Kirkland Enterprises Unlimited",
    url: "https://BigMoneyKirk.github.io/QR/",
    sound: "../../assets/sounds/Stephen_Kirkland.m4a",
    logo: "../../assets/images/logos/KEU_Logo_FullColor.png",
    photo: "Li4vLi4vYXNzZXRzL2ltYWdlcy9sb2dvcy9LRVVfTG9nb19GdWxsQ29sb3IucG5n",
    note: "Creator of the QR Virtual Business Card"
  };

}
