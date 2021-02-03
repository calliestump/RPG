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

// [Attributes]

// health
// speed
// damage

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
// export const Bill = storeState({health: 100, speed: 4, damage: 6, damageReduction: -10});
// export const Zoey = storeState({health: 100, speed: 7, damage: 8, damageReduction: -10});
export const Bill = storeState({health: 100, speed: 6});
export const Zoey = storeState({health: 80, speed: 7});

// [Antagonists]
// export const Witch = storeState({health: 60, speed: 7, damage: 10});
export const Witch = storeState({health: 60, speed: 4});

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

// const bazooka = changeState("damage")(20);
// const baseWeapon = changeState("damage")();
