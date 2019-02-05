import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServicesComponent } from './services/services.component';
import { ProjectsComponent } from './projects/projects.component';
import { WebProjectsComponent } from './web-projects/web-projects.component';
import { MobileApplicationsComponent } from './mobile-applications/mobile-applications.component';
import { AboutCompanyComponent } from './about-company/about-company.component';
import { TeamComponent } from './team/team.component';
import { ContactsComponent } from './contacts/contacts.component';

const pageRoutes: Routes = [
    {path: 'services', component: ServicesComponent},
    {path: 'projects', component: ProjectsComponent},
    {path: 'web-projects', component: WebProjectsComponent},
    {path: 'mobile-applications', component: MobileApplicationsComponent},
    {path: 'about', component: AboutCompanyComponent},
    {path: 'team', component: TeamComponent},
    {path: 'contacts', component: ContactsComponent},
];

@NgModule ({
    imports: [RouterModule.forRoot(pageRoutes)],
    exports: [RouterModule]
})

export class PageRoutingModule {

}