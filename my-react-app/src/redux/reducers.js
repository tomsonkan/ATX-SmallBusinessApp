import { combineReducers } from 'redux'


const user = (state = null) => state

const cars = (state = [], action) => {
    switch(action.type) {
        case 'ADD_BUS':
            console.log(action.value)
            return [ ...state, action.value ]
        case 'REMOVE_BUS':
            const newState = [ ...state ]
            newState.splice(action.value, 1)
            return newState
        default:
            return state
    }
}

export default combineReducers({ user, cars })


// const user = (state = [], action) => {
//     switch(action.type){
//         case "LOG_IN":
//             return {
//                 ...action.value,
//                 loggedIn: true
//             };
//         case "LOG_OUT":
//             return {
//                 ...state,
//                 loggedIn: false
//             }
//         default:
//             return user
//     }
// }
