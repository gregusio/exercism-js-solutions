/// <reference path="./global.d.ts" />
//
// @ts-check

/**
 * Determine the prize of the pizza given the pizza and optional extras
 *
 * @param {Pizza} pizza name of the pizza to be made
 * @param {Extra[]} extras list of extras
 *
 * @returns {number} the price of the pizza
 */
export function pizzaPrice(pizza, ...extras) {
  let price = 0;

  if (pizza !== null) {
    if (pizza === 'Margherita')
      price = 7;
    else if (pizza === 'Caprese')
      price = 9;
    else if (pizza === 'Formaggio')
      price = 10;
    pizza = null;
  }

  if (extras.length === 0)
    return price;
  else {
    if (extras[0] === 'ExtraSauce')
      price += 1;
    else if (extras[0] === 'ExtraToppings')
      price += 2;

    extras.shift();
    return price + pizzaPrice(pizza, ...extras);
  }
}

/**
 * Calculate the prize of the total order, given individual orders
 *
 * @param {PizzaOrder[]} pizzaOrders a list of pizza orders
 * @returns {number} the price of the total order
 */
export function orderPrice(pizzaOrders) {
  let price = 0;
  for (let pizza of pizzaOrders)
    price += pizzaPrice(pizza.pizza, ...pizza.extras);

  return price;
}
