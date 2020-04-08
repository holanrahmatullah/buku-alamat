import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Material Deign component
import { MatToolbarModule } from '@angular/material/toolbar';
// Membuat Toolbar
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
// Membuat Card Daftar Alamat
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
// Membuat List Menu
import { MatMenuModule } from '@angular/material/menu';
// Dialog Penambahan Alamat
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
// Membuat Component Baru
import { TambahAlamatComponent } from './tambah-alamat/tambah-alamat.component';
import { DetailAlamatComponent } from './detail-alamat/detail-alamat.component';
import { DialogKonfirmasiComponent } from './dialog-konfirmasi/dialog-konfirmasi.component';
// Mengatur Koneksi HTTP Angular
import { HttpClientModule } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  
  declarations: [
    AppComponent,
    TambahAlamatComponent,
    DetailAlamatComponent,
    DialogKonfirmasiComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule, // tambahan baru
    MatButtonModule, // Membuat Toolbar
    MatCardModule, // Membuat Toolbar
    MatListModule, // Membuat Card Daftar Alamat
    MatIconModule, // Membuat Card Daftar Alamat
    MatMenuModule, // Membuat List Menu
    MatDialogModule, // Dialog Penambahan Alamat
    MatFormFieldModule, // Dialog Penambahan Alamat
    MatInputModule, // Dialog Penambahan Alamat
    HttpClientModule, // Tambah Modul Koneks HTTP
    FormsModule,
    ReactiveFormsModule
  ],
  
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[
    TambahAlamatComponent,
    DetailAlamatComponent,
    DialogKonfirmasiComponent
  ],
})
export class AppModule { }
