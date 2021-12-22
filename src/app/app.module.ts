import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PagesModule } from './pages/pages.module';
import { HttpClientModule } from '@angular/common/http';
import { SignUpService } from './pages/services/sign-up.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MaterialModule } from './material.module';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  // Componentes que voy a utlizar
  declarations: [AppComponent, NavbarComponent, FooterComponent],
  // Importacion de modulos
  imports: [
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    PagesModule,
    HttpClientModule,
  ],
  // Servicios especificos de un modulo
  providers: [SignUpService],
  // Que componente quiero lanzar primero ?
  bootstrap: [AppComponent],
})
export class AppModule {}
