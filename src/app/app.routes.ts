import { Routes } from '@angular/router';
import { HomepagecompComponent } from './homepagecomp/homepagecomp.component';
import { LandingpagecompComponent } from './landingpagecomp/landingpagecomp.component';

export const routes: Routes = [


    {path:"",component:HomepagecompComponent},
    {path:"landing",component:LandingpagecompComponent}

];
