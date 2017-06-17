import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { MemberComponent } from './member/member.component';
import { AdminComponent } from './admin/admin.component';
import { AboutComponent } from './about/about.component';
import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { MemberDetailComponent } from './member-detail/member-detail.component';
import { UpdateMemberComponent } from './update-member/update-member.component';
import { AddMemberComponent } from './add-member/add-member.component';
import { RolePipe } from './role.pipe';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};


@NgModule({
  declarations: [
    AppComponent,
    MemberComponent,
    AdminComponent,
    AboutComponent,
    MemberDetailComponent,
    UpdateMemberComponent,
    AddMemberComponent,
    RolePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
   AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
