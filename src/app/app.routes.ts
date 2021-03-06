import { ContactsDetailComponent } from './contacts-detail/contacts-detail.component';
import { ContactsListComponent } from './contacts-list';
import { Routes } from '@angular/router';

export const ContactsAppRoutes: Routes = [
  { path: '', component: ContactsListComponent },
  { path: 'contact/:id', component:ContactsDetailComponent }
]