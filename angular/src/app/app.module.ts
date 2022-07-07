import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { FriendsService } from './friends.service';
import { HttpClientModule} from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AddComponent } from './add/add.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { EditComponent } from './edit/edit.component';
import { ProfilComponent } from './profil/profil.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    AddComponent,
    EditComponent,
    ProfilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule , 
    ReactiveFormsModule,
    RouterModule.forRoot([
      {
        path:"home", component: ListComponent,
      },
      {
        path:"edit/:id'", component: EditComponent,
      },
      {
        path:"profil/:id'", component: ProfilComponent
      },
    ]),
    BrowserAnimationsModule
  ],
  providers: [FriendsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
