import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

const store = createStore(counter);

function counter(state = 0, action) {
    switch(action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
}

class Counter extends React.Component {
    render() {
        var a = {x: 1, y: 2};
        var b = {...a, y: 3};
        console.log(b);
        return (
            <div>
                <label>{store.getState()}</label>
                <button id="+" onClick={ () => {store.dispatch({type: 'INCREMENT'})} }>+</button>
                <button id="-" onClick={ () => {store.dispatch({type: 'DECREMENT'})} }>-</button>
            </div>
            )
    }
}

const render = () => {
    ReactDOM.render(
        <Counter />,
        document.getElementById('root') 
    );
}

store.subscribe(render)
render();