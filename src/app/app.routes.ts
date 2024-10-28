import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { StructuralDirectivesComponent } from './structural-directives/structural-directives.component';
import { ControlFlowComponent } from './control-flow/control-flow.component';

export const routes: Routes = [

    {
        path:'',
        component: HomeComponent,
    }
    ,
{
    path:'about',
    component: AboutComponent,
}
,
{
    path:'contact',
    component: ContactComponent,
},

{
    path:'stdir',
    component: StructuralDirectivesComponent,
}
,

{
    path:'controlflow',
    component: ControlFlowComponent,
}
];
