// [CHARACTER TYPES]

// [Antagonists]
// Boomer - explosive
// Charger - berserker
// Hunter - assassin
// Jockey - manic
// Spitter - poisonous
// Tank - heavy
// Witch - wrath

// [Protagonists]- [starting weapon]
// Bill - assault rifle
// Zoey - sniper
// Francis - shotgun
// Louis - machine gun

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../css/styles.css';

// This function stores our state.
export const storeState = (intialState) => {
  let currentState = intialState;
  return (stateChangeFunction = state => state) => {
    const newState = stateChangeFunction(currentState);
    currentState = {...newState};
    return newState;
  };
};



// [Protagonists]
export const Bill = storeState({name: "Bill", health: 100, speed: 6, accuracy: 5});
export const Zoey = storeState({name: "Zoey", health: 100, speed: 7, accuracy: 5});
export const Louis = storeState({name: "Louis", health: 100, speed: 8, accuracy: 5});
export const Francis = storeState({name: "Francis", health: 100, speed: 5, accuracy: 5});

// [Antagonists]
export const Spitter = storeState({name: "Spitter", health: 20, speed: 6, accuracy: 5});
export const Hunter = storeState({name: "Hunter", health: 30, speed: 6, accuracy: 5});
export const Jockey = storeState({name: "Jockey", health: 40, speed: 10, accuracy: 5});
export const Boomer = storeState({name: "Boomer", health: 50, speed: 4, accuracy: 5});
export const Charger = storeState({name: "Charger", health: 60, speed: 7, accuracy: 5});
export const Witch = storeState({name: "Witch", health: 70, speed: 4, accuracy: 5});
export const Tank = storeState({name: "Tank", health: 100, speed: 2, accuracy: 5});
export const Dummy1 = storeState({name: "Dummy1", health: 100, speed: 2, accuracy: 5});
export const Dummy2 = storeState({name: "Dummy2", health: 100, speed: 2, accuracy: 5});

export const villainArr = [Spitter, Hunter, Jockey, Boomer, Charger, Witch, Tank, Dummy1, Dummy2];

// This is a function factory. We can easily create more specific functions that alter a plant's soil, water, and light to varying degrees.
export const changeState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop] : (state[prop] || 0) + value
    });
  };
};

// We create four functions using our function factory. We could easily create many more.
export const toVillSmallAttack = changeState("health")(-20);
export const toVillLargeAttack = changeState("health")(-40);

export const toCharSmallAttack = changeState("health")(-10);
export const toCharLargeAttack = changeState("health")(-20);

export const toVillLeveUp = changeState("health")(20);
export const toCharLeveUp = changeState("health")(40);