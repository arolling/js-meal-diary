export class Meal {
  public clicked: boolean;
  constructor(public name: string, public details: string, public calories: number, public type: string, public day: Date){
    this.clicked = false;
  }
}
