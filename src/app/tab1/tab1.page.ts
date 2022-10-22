import { ApiService } from './../service/api.service';
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Tab2Page } from '../tab2/tab2.page';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  // clientes: string = Cliente[];
public api: any;
  constructor(private ApiService: ApiService,
    private navCtrl:NavController
  ) {

    this.getData();
  }
  //metedo mao
  getData() {
    this.ApiService.getData().subscribe(res => { this.api = res; });
  }
  detalhes(dado) {
    console.log(dado);



}
}
