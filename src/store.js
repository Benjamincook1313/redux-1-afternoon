import { createStore } from 'redux'

const initialState = {
  name: '',
  category: '',
  firstName: '',
  lastName: '',
  ingredients: [],
  instructions: [],
  recipes: []
}

export const UPDATED_NAME = 'UPDATED_NAME'
export const UPDATED_CATEGORY = 'UPDATED_CATEGORY'
export const UPDATED_FIRST_NAME = 'UPDATED_FIRST_NAME'
export const UPDATED_LAST_NAME = 'UPDATED_LAST_NAME'
export const ADD_INGREDIENTS = 'ADD_INGREDIENTS'
export const ADD_INSTRUCTIONS = 'ADD_INSTRUCTIONS'
export const ADD_RECIPE = 'ADD_RECIPE'

function reducer(state = initialState, action){
  const {type, payload} = action
  switch(type) {
    case UPDATED_NAME:
      return{...state, recipeName: payload}
    case UPDATED_CATEGORY:
      return {...state, category: payload}
    case {UPDATED_FIRST_NAME}:
      return {...state, firstName: payload}
    case {UPDATED_LAST_NAME}:
      return {...state, lastName: payload}
    case {ADD_INGREDIENTS}:
      const newIngredients = {...state.ingredients, payload}
      return {...state, ingredients: newIngredients}
    case {ADD_INSTRUCTIONS}:
      const newInstructions = {...state.instructions, payload}
      return {...state, instructions: newInstructions}
    case {ADD_RECIPE}:
      const {
        name,
        category,
        firstName,
        lastName,
        ingredients,
        instructions,
      } = state
      const recipe = {
        name,
        category,
        firstName,
        lastName,
        ingredients,
        instructions
      }
      const newRecipes = [...state.recipes, recipe]
      return {...state, recipes: newRecipes}
    default:
      return state
  }
}

export default createStore(reducer)
