/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

export function cookingStatus(time = -1) {
  if (time === -1)
    return 'You forgot to set the timer.';
  else if (time === 0)
    return 'Lasagna is done.';
  else
    return 'Not done, please wait.';
}

export function preparationTime(arrayOfLayers, timePerLayer = 2) {
  return arrayOfLayers.length * timePerLayer;
}

export function quantities(arrayOfLayers) {
  let numberOfNoodlesLayers = 0;
  let numberOfSaucesLayers = 0;
  for (let i = 0; i < arrayOfLayers.length; i++) {
    if (arrayOfLayers[i] === 'noodles')
      numberOfNoodlesLayers++;
    else if (arrayOfLayers[i] === 'sauce')
      numberOfSaucesLayers++;
  }
  let howMuchNoodles = numberOfNoodlesLayers * 50;
  let howMuchSauce = numberOfSaucesLayers * 0.2;
  return {
    noodles: howMuchNoodles,
    sauce: howMuchSauce,
  }
}

export function addSecretIngredient(friendsList, myList) {
  myList.push(friendsList[friendsList.length - 1]);
}

export function scaleRecipe(recipe, numberOfPortions) {
  const newRecipe = {};
  for (let key in recipe) {
    newRecipe[key] = recipe[key];
  }
  for (let key in newRecipe) {
    newRecipe[key] *= numberOfPortions / 2;
  }
  return newRecipe;
}
