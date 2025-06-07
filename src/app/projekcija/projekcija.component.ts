import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { MovieModel } from '../../models/movie.model';
import { NgFor, NgIf } from '@angular/common';
import { MovieService } from '../../services/movie.service';
import { OnInit } from '@angular/core';
import { MatCardActions } from '@angular/material/card';
import { UtilsService } from '../../services/utils.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-projekcija',
  imports: [MatCardActions,NgIf, MatTableModule, NgFor, RouterLink],
  templateUrl: './projekcija.component.html',
  styleUrl: './projekcija.component.css'
})
export class ProjekcijaComponent {
    displayedColumns: string[] = ['title', 'shortDescription', 'genre', 'runTime', 'startDate', 'price', 'actors', 'actions']; // Ažurirane kolone
    dataSource: any[] = [];
  
    constructor( public utils: UtilsService) {
      MovieService.getMovies(0, 15).then(rsp => {
        console.log('API Response:', rsp.data); 
        this.dataSource = rsp.data; 
      });
    }
  }


