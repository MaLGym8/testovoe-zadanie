import { Component, OnInit } from '@angular/core';
import { GalleryService } from '../../services/gallery.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  imageGallery = [];

  constructor(private galleryServices: GalleryService) { }

  ngOnInit() {
    this.galleryServices.getImage().subscribe((res) => {
      this.imageGallery = res;
    });
  }

}
