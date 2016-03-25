import { Component } from 'angular2/core';
import { Meal } from './meal.model';
import { MealComponent } from './meal.component';

@Component({
  selector: 'meal-list',
  directives: [ MealComponent ],
  inputs: [ 'allMeals' ],
  template: `
    <display-meal class="dl-horizontal" *ngFor="#currentMeal of allMeals" [meal]="currentMeal">
    </display-meal>
  `

})

export class MealListComponent{

}
