import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'edit-meal',
  inputs: ['meal'],
  template: `
    <h3>Edit:</h3>
    <input class="form-control input-lg" [(ngModel)]="meal.name" type="text">
    <input class="form-control input-lg" [(ngModel)]="meal.details" type="text">
    <input class="form-control input-lg" [(ngModel)]="meal.calories" type="number">

    <hr />
  `
})

export class EditMealComponent{

}
