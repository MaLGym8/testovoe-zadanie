import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ServicesComponent } from './page/services/services.component';
import { ProjectsComponent } from './page/projects/projects.component';
import { WebProjectsComponent } from './page/web-projects/web-projects.component';
import { MobileApplicationsComponent } from './page/mobile-applications/mobile-applications.component';
import { AboutCompanyComponent } from './page/about-company/about-company.component';
import { TeamComponent } from './page/team/team.component';
import { ContactsComponent } from './page/contacts/contacts.component';
import { PageRoutingModule } from './page/page-routing.module';
import { GalleryService } from './services/gallery.service';
import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    ServicesComponent,
    ProjectsComponent,
    WebProjectsComponent,
    MobileApplicationsComponent,
    AboutCompanyComponent,
    TeamComponent,
    ContactsComponent
  ],
  imports: [
    BrowserModule,
    PageRoutingModule,
    HttpModule
  ],
  providers: [GalleryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
