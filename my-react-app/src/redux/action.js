const url = "https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json"

export const login = () => {
    return {
        type: 'LOG_IN',
        value: true
    }
}

export const logout = () => {
    return {
        type: 'LOG_OUT',
        value: false
    }
}

export const addBus = (bus) => {
    
    return {
        type: 'ADD_BUS',
        value: bus
    }
}

export const removeBus = (index) => {
    return {
        type: 'REMOVE_BUS',
        value: index
    }
}

export const fetchMakes = () => {
    return (dispatch) => {
        fetch("https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json")
            .then(res => res.json())
            .then(response =>{
                const action = {
                type: 'FETCH_MAKES',
                value: response.Results
                }
                dispatch(action)
            })
    }
}

export const deleteMakes = (index) => {
    return {
        type: 'DELETE_MAKES',
        value: index
    }
}