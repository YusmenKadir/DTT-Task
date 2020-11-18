import {Categories} from './interfaces/interfaces';
import {Meals} from './interfaces/interfaces'

export interface RootState {
  mealCategories:Array<Categories>
  mealsArray: Array<Meals>
  randomMeal: Array<Meals>
  ingredients: string[],
  ingredients2: string[],
  mealId : string, 
}
