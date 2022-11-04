import { SearchboxService } from './../shared/services/searchbox.service';
import { ServiceService } from './../shared/services/service.service';
import { MaspopularesService } from './../shared/services/maspopulares.service';
import { MejoresService } from './../shared/services/mejores.service';
import { EsperadosService } from './../shared/services/esperados.service';
import { MaspopService } from './../shared/services/maspop.service';
import { PopularesService } from './../shared/services/populares.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  populars: any = [];
  masPops: any = [];
  esperados: any = [];
  mejores: any = [];
  chulis: any = [];
  text: string = '';



  constructor( private popularesService: PopularesService, private maspopService: MaspopService, private esperadosService: EsperadosService, private mejoresService: MejoresService, private masPopularesService: MaspopularesService, private serviceService: ServiceService, private searchboxService: SearchboxService) {


  }

  ngOnInit(): void {
    this.popularesService.getPopulars().subscribe((res: any) => {
      this.populars = res.data;
     })

     this.maspopService.getMasPop().subscribe((res: any) => {
      this.masPops = res.data;
     })

     this.esperadosService.getEsperados().subscribe((res: any) => {
      this.esperados = res.data;
     })

     this.mejoresService.getMejores().subscribe((res: any) => {
      this.mejores = res.data;
     })

     this.masPopularesService.getMasChulis().subscribe((res: any) => {
      this.chulis = res.data;
     })

     this.masPopularesService.getMasChulis().subscribe((res: any) => {
      this.chulis = res.data;
     })

     this.searchboxService.textObservable.subscribe(text => {
        this.text = text
     })
  }

}
