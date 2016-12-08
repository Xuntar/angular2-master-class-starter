import { BrowserModule } from '@angular/platform-browser'; // Needed to be able to run on the browser
import { NgModule } from '@angular/core';
// Every component needs to be part of at least one NgModule
import { ContactsAppComponent } from './contacts.component';
import { ContactsHeaderComponent } from './contacts-header'; // this is thanks to the index.ts file that exports the component
//import { ContactsHeaderComponent } from './contacts-header/contacts-header.component'; is also possible

// You need one root module always to bootstrap your application
@NgModule({
  declarations: [ContactsAppComponent, ContactsHeaderComponent], // You can declare multiple components
  imports: [BrowserModule], // You add other NgModules through the import clause
  bootstrap: [ContactsAppComponent] // You need something to bootstrap your application
})
export class ContactsModule {

}
