import { state } from './factory-functions/stateFactory.js';


export function onKeyDown(e) {
    e.preventDefault();
    state.keys[e.code] = true;
}
export function onKeyUp(e) {
    state.keys[e.code] = false;
}