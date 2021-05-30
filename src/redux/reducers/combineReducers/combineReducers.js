import { combineReducers } from "redux";
import { cartReducers} from '../cartReducers/cartReducers'

export const allReducers = combineReducers({
    cartReducers : cartReducers
})