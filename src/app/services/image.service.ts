import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  public flamingo: string = "assets/images/people/flamingo.jpg";
  public profile: string = "assets/images/people/becca.jfif";

  constructor() { }
}
