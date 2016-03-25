import { Component } from 'angular2/core';
import { Meal } from './meal.model';
//import * as moment from 'moment';

@Component({
  selector: 'display-meal',
  inputs: ['meal'],
  template: `
    <dt>{{meal.name}}</dt>
    <dd>Calories: {{ meal.calories }}</dd>
    <dd>Notes: {{ meal.details }}</dd>
    <dd>Type: {{ meal.type }}</dd>
    <dd>Date: {{ meal.day.toDateString() }}</dd>
  `
})

export class MealComponent {

}
