import { Component } from 'angular2/core';
import { MealListComponent } from './meal-list.component';
import { Meal } from './meal.model';

@Component({
  selector: 'my-app',
  directives: [ MealListComponent ],
  template: `
    <div class="jumbotron">
      <h1>Epicodus Meal Diary</h1>
      <h3>Total Calories Consumed: {{getTotalCalories(meals)}}</h3>
      <h3>Average Calories per Entry: {{ getAverageCalories(meals).toFixed(2) }}</h3>
      <h3>Average Calories per Meal: {{ getAverageMeal(meals).toFixed(2) }}</h3>
    </div>
    <div class="container">
      <h1>Track Your Daily Meals!</h1>
      <meal-list [allMeals]="meals" ></meal-list>
    </div>
  `
})

export class AppComponent {
  public meals: Meal[];
  public today: Date;

  constructor(){
    this.today = new Date();

    this.meals = [
      new Meal("Grilled Cheese", "Whole wheat bread, as little butter as possible", 750, "Lunch", this.today),
      new Meal("Waffles", "With real maple syrup and butter - worth it", 1000, "Breakfast", this.today),
      new Meal("Granola bar", "Says healthy on the package", 120, "Snack", this.today),
      new Meal("Skid Row Stroganoff", "Uses non-fat yogurt!", 600, "Dinner", this.today),
      new Meal("Chicken Noodle Soup", "Homemade, small portion", 250, "Dinner", new Date("2/22/2016")),
      new Meal("Fish & Chips", "From a food truck", 1250, "Lunch", new Date("3/19/2016"))
    ];
  }

  getTotalCalories(mealList: Meal[]){
    var sum = 0;
    for (var key in mealList){
      sum += mealList[key].calories;
    }
    return sum;
  }

  getAverageCalories(mealList: Meal[]){
    return this.getTotalCalories(mealList) / mealList.length;
  }

  getAverageMeal(mealList: Meal[]){
    var mealsOnly = mealList.filter((meal) => {
      return meal.type !== "Snack";
    });
    return this.getAverageCalories(mealsOnly);
  }
}
