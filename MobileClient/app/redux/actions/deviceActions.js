export function toggle(device){
    return {
        type: "TOGGLE", 
    }
}

export function toggleOn(device){
    return {
        type: "TOGGLE_ON_FULFILLED", 
    }
}
export function toggleOff(device){
    return {
        type: "TOGGLE_OFF_FULFILLED",
    }
}