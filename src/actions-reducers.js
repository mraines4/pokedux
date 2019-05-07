// =================================================================================
/////////////////////////////////////
// STATE
import {combineReducers} from 'redux';
import initalCards from './base.json';
// console.log(initialState);

const VISIBILITY_ALL = 'all';
const VISIBILITY_CAUGHT = 'caught';
const VISIBILITY_UNCAUGHT = 'uncaught';


const initialState = {
    ...initalCards,
    visibilityFilter: VISIBILITY_UNCAUGHT
}

// what state looks like - object with a cards property which is an array of objects
// {cards: [ {}, {}, {} ]}


/////////////////////////////////////
// ACTIONS + ACTION CREATORS
const ACTION_CATCH = 'catch';

export function catchCard(id) {
    return {
        type: ACTION_CATCH,
        payload: {
            id,
        }
    }
}

const ACTION_VISIBILITY_ALL = VISIBILITY_ALL
const ACTION_VISIBILITY_CAUGHT = VISIBILITY_CAUGHT
const ACTION_VISIBILITY_UNCAUGHT = VISIBILITY_UNCAUGHT

export function visibilitySetAll() {
    return {
        type: ACTION_VISIBILITY_ALL
    }
}

export function visibilitySetCaught() {
    return {
        type: ACTION_VISIBILITY_CAUGHT
    }
}

export function visibilitySetUncaught() {
    return {
        type: ACTION_VISIBILITY_UNCAUGHT
    }
}


/////////////////////////////////////
// REDUCER

// card reducer manages just an array now that you do initialState.cards
function cards(state=initialState.cards, action={type: ''}) {
    switch(action.type) {
        case ACTION_CATCH:
            // find the card, set it to caught
            const newState = state.map(card => {
                if (card.id === action.payload.id) {
                    return {
                        ...card,
                        isCaught: true
                    }
                } else {
                    return card;
                }
            })
            // whatever is returned by the reducer, is auto used by the store as the new version of state
            return newState
        default:
            return state
    }
}

// visibility reducer manages a string (one little piece of the state)
function visibility(state=initialState.visibilityFilter, action={type: ''}) {
    switch(action.type) {
        case ACTION_VISIBILITY_ALL:
            return VISIBILITY_ALL
        case ACTION_VISIBILITY_CAUGHT:
            return VISIBILITY_CAUGHT
        case ACTION_VISIBILITY_UNCAUGHT:
            return VISIBILITY_UNCAUGHT
        default:
        return state;
    }   
}



export const rootReducer = combineReducers({
    cards: cards,
    visibilityFilter: visibility
})
