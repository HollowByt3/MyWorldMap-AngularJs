import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { HttpClientModule } from '@angular/common/http';

 imports: [
    BrowserModule,
    HttpClientModule
  ]

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
