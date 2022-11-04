import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AnimePageComponent } from './anime-page/anime-page.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { GalleryComponent } from './shared/components/gallery/gallery.component';
import { SearchComponent } from './shared/components/search/search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PipePipe } from './pipes/pipe.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AnimePageComponent,
    HeaderComponent,
    FooterComponent,
    GalleryComponent,
    SearchComponent,
    PipePipe,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
