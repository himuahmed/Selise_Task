import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { EmailComponent } from './email/email.component';
import { EmailDetailsComponent } from './email-details/email-details.component';


@NgModule({
  declarations: [			
    AppComponent,
      SidebarComponent,
      EmailComponent,
      EmailDetailsComponent
   ],
  imports: [
    BrowserModule
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
