/**
 * Created by noonon on 8/10/16.
 */
import { INCREASE, DECREASE } from '../constants'

export function increase(n) {
    return {
        type: INCREASE,
        amount: n
    }
}

export function decrease(n) {
    return {
        type: DECREASE,
        amount: n
    }
}