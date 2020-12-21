import { Component, OnInit } from '@angular/core';
import { FoodService } from '../food.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import {Location}from '@angular/common';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent  {

obs:Observable<Object>
prodotto: any;
foodServiceObs: any;
  constructor(public food : FoodService,
    private route: ActivatedRoute,
    private service: FoodService,
    private location : Location) { }

  ngOnInit(): void {
    this.obs = this.route.paramMap;
    this.obs.subscribe(this.getRouterParam);
  }

  getRouterParam = (params : ParamMap) =>
  {
    let foodId = params.get('id');
    console.log(foodId);

    this.foodServiceObs = this.service.getFoodId(foodId);
    this.foodServiceObs.subscribe((data)=>this.prodotto = data);
  }

}
