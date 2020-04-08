import { Component } from '@angular/core';
// import modul dialog
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
// import halaman dialog yang sudah dibuat pada tahap sebelumnya
import{ TambahAlamatComponent } from './tambah-alamat/tambah-alamat.component';
// Dialog Detail Alamat
import { DetailAlamatComponent } from './detail-alamat/detail-alamat.component';
// Membuat Dialog Konfirmasi Hapus Data
import { DialogKonfirmasiComponent} from './dialog-konfirmasi/dialog-konfirmasi.component';
// untuk memangil api sercvice
import { ApiService } from './api.service'; // kode tambahan

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'buku-alamat';
  constructor(
    public dialog:MatDialog, // Menabahkan variable dialog
    public api:ApiService
    
      )
    {
      this.getData(); // kode tambahan
    }

    // Mengambil Data Pada Server 
   
    dataAlamat:any=[];
  getData()
  {
    this.api.baca().subscribe(res=>{
      this.dataAlamat=res;
    })
  }
  // Fungsi untuk menampilkan dialog penambahan alamat baru 
  buatAlamat()
  {
    const dialogRef = this.dialog.open(TambahAlamatComponent,{
      width: '450px',
      data:null
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getData();// data diambil lagi dari server saat dialog tertutup
    });
  } 
  // Membuka dialog detail alamat
  detailAlamat(item)
  {
    const dialogRef = this.dialog.open(DetailAlamatComponent, {
      width: '450px',
      data:item
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('the Dialog Was Closed');
    });
  }
  konfirmasiHapus(id)
  {
    const dialogRef = this.dialog.open(DialogKonfirmasiComponent,{
      width: '450px',
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result == true)
      {
        console.log('Menghapus Data');
        this.api.hapus(id).subscribe(res=>{
          this.getData();
        })
      }
    });
  }
  editAlamat(data)
  {
    const dialogRef = this.dialog.open(TambahAlamatComponent, {
      width: '450px',
      data:data
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getData();    
    });
  }
  
}
