import { INIT } from '../constants'

const defaultState = {
    init: "初始化"
}

const init =  (state=defaultState, action) => {
    switch (action.type) {
        case INIT:
            return {
                init: action.type
            }
        default:
            return state;
    }
}

export default init