import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';// angular fire
import * as firebase from 'firebase';// firebase sdk
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatListModule} from '@angular/material/list';
import {ChatComponent} from './chat/chat/chat.component';
import { FormsModule } from '@angular/forms';
import {NgxAutoScrollModule} from 'ngx-auto-scroll';
import {AngularFireAuthModule} from 'angularfire2/auth/auth.module';
import { ScrollDirectiveDirective } from './scroll-directive.directive';

firebase.initializeApp(environment.firebaseConfig);
@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    ScrollDirectiveDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // AngularFireModule.initializeApp(environment.firebaseConfig),
    // AngularFireDatabaseModule,
    // AngularFireAuthModule,
    MatCardModule,
    MatFormFieldModule,
    MatListModule,
    NgxAutoScrollModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
