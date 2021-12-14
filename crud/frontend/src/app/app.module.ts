import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './componenents/template/header/header.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { FooterComponent } from './componenents/template/footer/footer.component';
import { NavComponent } from './componenents/template/nav/nav.component'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatListModule } from '@angular/material/list';
import { HomeComponent } from './views/home/home.component'
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ProductCrudComponent } from './views/product-crud/product-crud.component';
import { RedDirective } from './directives/red.directive';
import { ProductCreateComponent } from './componenents/product/product-create/product-create.component'

import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { ProductReadComponent } from './componenents/product/product-read/product-read.component'

import localePt from '@angular/common/locales/pt'
import { registerLocaleData } from '@angular/common';
import { ProductUpdateComponent } from './componenents/product/product-update/product-update.component';
import { ProductDeleteComponent } from './componenents/product/product-delete/product-delete.component'  

registerLocaleData(localePt)

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    ProductCrudComponent,
    RedDirective,
    ProductCreateComponent,
    ProductReadComponent,
    ProductUpdateComponent,
    ProductDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'pt-BR'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
