import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe'

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe("Recipe 1", "Recipe 1 Description", "http://images.media-allrecipes.com/userphotos/250x250/00/12/51/125180.jpg",[]),
    new Recipe("Recipe 2", "Recipe 2 Description", "http://www.cheaprecipeblog.com/wp-content/uploads/2013/02/Indian-Pea-and-Potato-Curry-Aloo-Matar-Recipe-2.jpg",[])
  ];
  @Output() recipeSelected = new EventEmitter<Recipe>();  
  
  constructor() { }

  ngOnInit() {
  }

  onSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }

}
