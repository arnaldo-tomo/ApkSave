import { ApiService } from './../service/api.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.scss'],
})
export class DetalhesComponent implements OnInit {
  private url: string = "http://127.0.0.1:8000/api/";
  constructor( private ApiService: ApiService) {


   }

  ngOnInit() {
    this.ApiService.
  }

}
