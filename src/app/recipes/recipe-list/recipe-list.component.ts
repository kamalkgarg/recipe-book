import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe'

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
  recipies: Recipe[] = [];
  recipe = new Recipe("Dummy", "Dummy", "https://images-na.ssl-images-amazon.com/images/I/31d%2B43nQJCL._SY300_.jpg");

  constructor() { }

  ngOnInit() {
  }

}
