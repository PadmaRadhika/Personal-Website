import { Routes } from '@angular/router';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { ContactComponent } from './contact/contact.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ResumeComponent } from './resume/resume.component';
import { HomeComponent } from './home/home.component';

const routeConfig: Routes = [
  
    {
        path: '',
        component: HomeComponent,
        title: 'Home page'
      },
    {
      path: 'aboutme',
      component: AboutmeComponent,
      title: 'About Me page'
    },
    {
      path: 'resume',
      component: ResumeComponent,
      title: 'Resume page'
    },
    {
        path: 'portfolio',
        component: PortfolioComponent,
        title: 'Portfolio page'
      },
      {
        path: 'contact',
        component: ContactComponent,
        title: 'Contact page'
      }    
  ];
  
  export default routeConfig;