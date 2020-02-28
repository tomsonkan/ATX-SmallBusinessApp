
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