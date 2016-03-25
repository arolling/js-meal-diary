import { Component } from 'angular2/core';
import { Meal } from './meal.model';
import { MealComponent } from './meal.component';
import { AddMealComponent } from './add-meal.component';


@Component({
  selector: 'meal-list',
  directives: [ MealComponent, AddMealComponent ],
  inputs: [ 'allMeals' ],
  template: `
    <div class="row">
      <div class="col-sm-7">
        <div class="list-group-item" *ngFor="#currentMeal of allMeals">
          <h3 class="list-group-item-heading" (click)="selectMeal(currentMeal)" [class.editable]="currentMeal === highlighted">{{currentMeal.name}}</h3>
          <display-meal [meal]="currentMeal" *ngIf="currentMeal === highlighted"></display-meal>
        </div>
      </div>
      <div class="col-sm-5">
        <add-meal (newMeal)="addNewMeal($event)"></add-meal>
      </div>
    </div>
  `

})

export class MealListComponent{
  public allMeals: Meal[];
  public newDay: Date;
  public highlighted: Meal;

  constructor(){

  }

  addNewMeal(newMealInfo: any[]){
    this.newDay = new Date(newMealInfo[4]);
    this.allMeals.push(new Meal(newMealInfo[0], newMealInfo[1], newMealInfo[2], newMealInfo[3], this.newDay));
    console.log(this.allMeals);
  }

  selectMeal(clicked: Meal){
    this.highlighted = clicked;
  }
}
