import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'add-meal',
  outputs: ['newMeal'],
  template: `
    <input class="form-control" placeholder="Food" type="text" #nameInput>
    <input class="form-control" placeholder="Notes or Description" type="text" #detailsInput>
    <input class="form-control" placeholder="Calories" type="number" #caloriesInput>
    <input class="form-control" type="date" placeholder="Date" #dayInput>
    <select class="form-control" #typeInput>
      <option value="Breakfast">Breakfast</option>
      <option value="Lunch">Lunch</option>
      <option value="Dinner">Dinner</option>
      <option value="Snack">Snack</option>
    </select>
    <button class=" btn btn-lg btn-default" (click)="submitNewMeal(nameInput, detailsInput, caloriesInput, typeInput, dayInput)">Add New Meal</button>
  `
})

export class AddMealComponent{
  public newMeal: EventEmitter<any[]>;
  constructor(){
    this.newMeal = new EventEmitter();
  }
  submitNewMeal(newName: HTMLInputElement, newDetails: HTMLInputElement, newCalories: HTMLInputElement, newType: HTMLInputElement, newDay: HTMLInputElement){
    this.newMeal.emit([newName.value, newDetails.value, parseInt(newCalories.value), newType.value, newDay.value]);
  }
}
