import { INIT } from '../constants'

export function init(name) {
    return {
        type: INIT,
        name
    }
}