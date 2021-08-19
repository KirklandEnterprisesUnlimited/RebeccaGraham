import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  public flamingo: string = "assets/images/people/profile.jpg";

  constructor() { }
}
