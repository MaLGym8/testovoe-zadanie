import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class GalleryService {

  constructor(private http: Http) {}

  getImage() {
    return this.http.get('https://picsum.photos/list')
      .map((response: Response) => response.json());
  }

}
