import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { Ionic2RatingModule } from 'ionic2-rating';
import { AttendancePage } from "../pages/attendance/attendance";
import { ThanksPage } from "../pages/thanks/thanks";
import { AdminPage } from "../pages/admin/admin";


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AttendancePage,
    ThanksPage,
    AdminPage
  ],
  imports: [
    BrowserModule,
    Ionic2RatingModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AttendancePage,
    ThanksPage,
    AdminPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
