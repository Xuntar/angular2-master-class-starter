import { BrowserModule } from '@angular/platform-browser'; // Needed to be able to run on the browser
import { NgModule } from '@angular/core';
// Every component needs to be part of at least one NgModule
import { ContactsAppComponent } from './contacts.component';
import { ContactsHeaderComponent } from './contacts-header'; // this is thanks to the index.ts file that exports the component
//import { ContactsHeaderComponent } from './contacts-header/contacts-header.component'; is also possible
import { ContactsService } from './contacts.service';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { RouterModule } from '@angular/router';
import { ContactsAppRoutes } from './app.routes';

// You need one root module always to bootstrap your application
@NgModule({
  declarations: [
    ContactsAppComponent,
    ContactsHeaderComponent,
    ContactsListComponent
    ], // You can declare multiple components
  imports: [
    BrowserModule,
    RouterModule.forRoot(ContactsAppRoutes)
    ], // You add other NgModules through the import clause
  bootstrap: [ContactsAppComponent], // You need something to bootstrap your application
  providers: [{ provide: ContactsService, useClass: ContactsService }] // or shorthand  [ContactsService] or something different "UseValue: 'this will be returned'"
})
export class ContactsModule {

}
