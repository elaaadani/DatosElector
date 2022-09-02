import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgxScannerQrcodeComponent } from 'ngx-scanner-qrcode';
import { NgxSpinnerModule, NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private router:Router,private spinner: NgxSpinnerService)
  {

  }


  public output!: string;
  // @ViewChild('action', { static: true }) action: NgxScannerQrcodeComponent;
  // TODO something this.action
   FuncionRut(output:string) {

    const myArray = output.split("=")[1];
    const MyArray2 = myArray.split("&")[0]
    let Rut = MyArray2;
    this.spinner.show();
    setTimeout(()=>{
      this.spinner.hide();
    },1000);

    this.router.navigate(['/DatosElectorales/'+Rut])
  }



  public onError(e: any): void {
    alert(e);

  }


}
