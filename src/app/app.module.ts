import { DataService } from './zzz-other/services/data.service';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { MatCardModule, MatButtonModule, MatButtonToggleModule } from '@angular/material';
import { MatInputModule } from '@angular/material/input';
import { ChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';
import { StatsCardComponent } from './stats-card/stats-card.component';
import { TripIndexComponent } from './trip-index/trip-index.component';
import { DistancesWalkedComponent } from './distances-walked/distances-walked.component';
import { AccommodationComponent } from './accommodation/accommodation.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ImageGalleryComponent } from './image-gallery/image-gallery.component';
import { DayByDayComponent } from './day-by-day/day-by-day.component';
import { FooterComponent } from './footer/footer.component';
import { ManWalkingComponent } from './man-walking/man-walking.component';
import { AccommodationCardComponent } from './accommodation-card/accommodation-card.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { DistancesWalkedChartComponent } from './distances-walked-chart/distances-walked-chart.component';


@NgModule({
  declarations: [
    AppComponent,
    StatsCardComponent,
    TripIndexComponent,
    DistancesWalkedComponent,
    AccommodationComponent,
    PageNotFoundComponent,
    ImageGalleryComponent,
    DayByDayComponent,
    FooterComponent,
    ManWalkingComponent,
    AccommodationCardComponent,
    HomeComponent,
    ContactComponent,
    DistancesWalkedChartComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatInputModule,
    ChartsModule,
    RouterModule.forRoot([
        { path: '', component: HomeComponent },
        { path: 'accommodation', component: AccommodationComponent },
        { path: 'accommodation-card/:i', component: AccommodationCardComponent },
        { path: 'distances-walked', component: DistancesWalkedComponent },
        { path: 'stats-card/:i', component: StatsCardComponent },
        { path: 'trip-index', component: TripIndexComponent },
        { path: 'day-by-day', component: DayByDayComponent },
        { path: 'photo-gallery', component: ImageGalleryComponent },        
        { path: 'man-walking', component: ManWalkingComponent },        
        { path: 'contact', component: ContactComponent },        
        // { path: 'tables/:displayFullTable', component: TablesComponent },
        { path: '**', component: PageNotFoundComponent }
      ])  
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
