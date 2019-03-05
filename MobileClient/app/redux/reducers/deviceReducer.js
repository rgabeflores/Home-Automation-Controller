const INITIAL_STATE = {
    toggled: false,
    requesting: false,
    requested: false,
    error: null,
};

export default function reducer(
    state = INITIAL_STATE, 
    action
    ){
    switch(action.type){
        case "TOGGLE":{
            return {
                ...state,
                requesting: true
            }
        }
        case "TOGGLE_ON_FULFILLED":{
            return {
                ...state,
                toggled: true,
                requesting: false
            }
        }
        case "TOGGLE_OFF_FULFILLED":{
            return {
                ...state,
                toggled: false,
                requesting: false
            }
        }
    }
    return state;
}