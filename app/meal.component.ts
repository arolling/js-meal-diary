import { Component } from 'angular2/core';
import { Meal } from './meal.model';
//import * as moment_ from './moment';
//const moment:moment.MomentStatic = (<any>moment_)['default'] || moment_;


@Component({
  selector: 'display-meal',
  inputs: ['meal'],
  template: `

    <p class="list-group-item-text">Calories: {{ meal.calories }}</p>
    <p class="list-group-item-text">Notes: {{ meal.details }}</p>
    <p class="list-group-item-text">Type: {{ meal.type }}</p>
    <p class="list-group-item-text">Date: {{ meal.day.toDateString() }}</p>
  `
})

export class MealComponent {

  constructor() {}

}
