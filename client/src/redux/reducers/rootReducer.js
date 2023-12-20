import { combineReducers } from "redux";
import authReducers from "./authReducer";
import usersReducers from "./usersReducer";


const rootReducer = combineReducers({
    auth: authReducers,
    users: usersReducers
})

export default rootReducer