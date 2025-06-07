import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MovieModel } from '../../models/movie.model';
import { NgFor, NgIf } from '@angular/common';
import { MovieService } from '../../services/movie.service';
import { MatButtonModule } from '@angular/material/button';
import { UtilsService } from '../../services/utils.service';
import { LoadingComponent } from "../loading/loading.component";
import { RouterLink } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-search',
  imports: [
    MatTableModule,
    NgIf,
    MatButtonModule,
    LoadingComponent,
    RouterLink,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatCardModule,
    MatSelectModule,
    MatIconModule
  ],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  displayedColumns: string[] = ['title', 'runtime', 'startDate','shortDescription','createdAt', 'pricePerTicket', 'actions'];
  allData: MovieModel[] | null = null;
  dataSource: MovieModel[] = [];
  
  filters = {
    title: '',
    runtime: '',
    date: '',
    summary: '',
    createdAt: ''
  };
 
  constructor(public utils: UtilsService) {
    MovieService.getMovies().then(rsp => {
      console.log('API Response:', rsp.data);
      this.allData = rsp.data;
      this.dataSource = rsp.data;
    });
  }

  public doSearch(e: any) {
    const input = e.target.value;
    if (this.allData == null) return;
    if (input == '') {
      this.dataSource = this.allData;
      return;
    }
    this.dataSource = this.allData.filter(obj => {
       return obj.title.toLowerCase().includes(input.toLowerCase())
       || obj.shortDescription.toLowerCase().includes(input.toLowerCase())
       || obj.runTime.toString().includes(input)
       || obj.createdAt.includes(input);
    });
  }

  public applyFilters() {
    if (this.allData == null) return;

    this.dataSource = this.allData.filter(movie => {
      const titleMatch = !this.filters.title || 
        movie.title.toLowerCase().includes(this.filters.title.toLowerCase());

      const runtimeMatch = !this.filters.runtime || 
        movie.runTime.toString().includes(this.filters.runtime);

      const dateMatch = !this.filters.date || 
        movie.startDate.includes(this.filters.date);

      const summaryMatch = !this.filters.summary || 
        movie.shortDescription.toLowerCase().includes(this.filters.summary.toLowerCase());

      const createdAtMatch = !this.filters.createdAt || 
        movie.createdAt.includes(this.filters.createdAt);

      return titleMatch && runtimeMatch && dateMatch && summaryMatch && createdAtMatch;
    });
  }

  public clearAllFilters() {
    this.filters = {
      title: '',
      runtime: '',
      date: '',
      summary: '',
      createdAt: ''
    };
    
    if (this.allData) {
      this.dataSource = this.allData;
    }
  }

  public hasActiveFilters(): boolean {
    return !!(this.filters.title || this.filters.runtime || this.filters.date || 
              this.filters.summary || this.filters.createdAt);
  }
}