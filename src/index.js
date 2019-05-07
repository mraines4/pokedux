import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


// =================================================================================
/////////////////////////////////////
// STATE
import {createStore, combineReducers} from 'redux';
import initalCards from './base.json';
// console.log(initialState);

const VISIBILITY_ALL = 'all';
const VISIBILITY_CAUGHT = 'caught';
const VISIBILITY_UNCAUGHT = 'uncaught';


const initialState = {
    ...initalCards,
    visibilityFilter: VISIBILITY_ALL
}

// what state looks like - object with a cards property which is an array of objects
// {cards: [ {}, {}, {} ]}


/////////////////////////////////////
// ACTIONS + ACTION CREATORS
const ACTION_CATCH = 'catch';

function catchCard(id) {
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

function visibilitySetAll() {
    return {
        type: ACTION_VISIBILITY_ALL
    }
}

function visibilitySetCaught() {
    return {
        type: ACTION_VISIBILITY_CAUGHT
    }
}

function visibilitySetUncaught() {
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
            break;
        default:
            return state
        break;
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



const rootReducer = combineReducers({
    cards: cards,
    visibilityFilter: visibility
})


/////////////////////////////////////
// STORE

const store = createStore(rootReducer);

// =================================================================================





ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
