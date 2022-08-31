import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { Elector } from '../models/UI-Models/elector.mod';
import { ElectorService } from './elector.service';

@Component({
  selector: 'app-datos-elector',
  templateUrl: './datos-elector.component.html',
  styleUrls: ['./datos-elector.component.css']
})
export class DatosElectorComponent implements OnInit {

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


  constructor(public readonly electorService:ElectorService,
    public readonly route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe(
      (params) =>{
        this.electorrut = params.get('rut');

        if(this.electorrut)
        {
          this.electorService.getElector(this.electorrut)
          .subscribe(
            (sucessResponse)=>{
              this.elector = sucessResponse;
            }
          );
        }
      }
    );

  }

}
