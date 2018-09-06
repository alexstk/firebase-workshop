import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppComponent } from './app.component';
import { ChatComponent } from './chat/chat.component';
import { MessageComponent } from './message/message.component';
import { InputComponent } from './input/input.component';

var config = {
  apiKey: "AIzaSyCfHrCsFlqqSKv8rF-9ggA7VrjXLrE4M5o",
  authDomain: "chat-firebase-city.firebaseapp.com",
  databaseURL: "https://chat-firebase-city.firebaseio.com",
  projectId: "chat-firebase-city",
  storageBucket: "chat-firebase-city.appspot.com",
  messagingSenderId: "36220629870"
};
//

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    MessageComponent,
    InputComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
