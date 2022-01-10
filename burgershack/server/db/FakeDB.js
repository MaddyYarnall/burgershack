import { generateId } from '../../client/app/Utils/generateId.js'
export const FakeDb = {
  burgers: [{ id: generateId(), name: 'Cheeseburger', cheese: true, tomatoes: false, ketchup: true, lettuce: false, onions: false, pickles: false, bacon: false },
  { id: generateId(), name: 'Deluxe Burger', cheese: true, tomatoes: true, ketchup: true, lettuce: true, onions: true, pickles: true, bacon: true },
  { id: generateId(), name: 'Bacon Burger', cheese: true, tomatoes: false, ketchup: true, lettuce: false, onions: false, pickles: false, bacon: true },
  { id: generateId(), name: 'Plain Burger', cheese: false, tomatoes: false, ketchup: false, lettuce: false, onions: false, pickles: false, bacon: false }
  ]
}
