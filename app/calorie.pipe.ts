import { Pipe, PipeTransform } from 'angular2/core';
import { Meal } from './meal.model';

@Pipe({
  name: 'healthy',
  pure: false
})

export class CaloriePipe implements PipeTransform {
  transform(input: Meal[], args) {
    return input.filter((meal) => {
      if (args[0] === "Unhealthy") {
        return meal.calories >= 300;
      } else if (args[0] === "Healthy") {
        return meal.calories < 300;
      } else {
        return true;
      }
    });
  }
}
