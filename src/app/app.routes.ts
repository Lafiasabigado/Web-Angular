import { Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ContactComponent } from './contact/contact.component';
import { FormationsComponent } from './formations/formations.component';

export const routes: Routes = [
    {
        path: '',
        component: AccueilComponent
    },
    {
        path: 'contact',
        component: ContactComponent
    },
    {
        path: 'formations',
        component: FormationsComponent
    }
];
