import { Component, ErrorHandler, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Elector } from '../models/UI-Models/elector.mod';
import { ElectorService } from './elector.service';

@Component({
  selector: 'app-datos-elector',
  templateUrl: './datos-elector.component.html',
  styleUrls: ['./datos-elector.component.css']
})
export class DatosElectorComponent implements OnInit {

  electores: Elector[] = [];
  electorrut:string | null | undefined;
  elector:Elector = {
    rut:'',
    nombre:'',
    circunscripcion_Electoral:'',
    comuna:'',
    provincia:'',
    region:'',
    pais:'',
    mesa:'',
    local_Votacion:'',
    ubicacion:''

  }
  displayedColumns: string[] = ['rut','nombre','circunscripcion_Electoral','comuna','provincia','region','pais','mesa','local_Votacion','ubicacion'];
  dataSource : MatTableDataSource<Elector> = new MatTableDataSource<Elector>();
  @ViewChild(MatPaginator) matPaginator!: MatPaginator;


  constructor(public readonly electorService:ElectorService,
    public readonly route: ActivatedRoute,private router:Router) { }

  public estado=false;


  ngOnInit(): void {

    this.Response();


  }

  Response(){
    this.route.paramMap.subscribe(
      (params) =>{
        this.electorrut = params.get('rut');

        if(this.electorrut)
        {
          this.electorService.getElector(this.electorrut)
          .subscribe(
            (sucessResponse)=>{
              this.elector = sucessResponse;
              console.log(sucessResponse);

              this.estado=true;
            },(errorResponse)=>{
              this.elector = errorResponse;
              console.log("RUT NO EXISTE");
              console.log(errorResponse);
              this.estado=false;

            }
          );
        }

      }
    );

  }

}
