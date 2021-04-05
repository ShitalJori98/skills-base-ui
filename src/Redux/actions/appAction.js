import { SHOW_SUCCESS_MESSAGE } from "../ActionTypes"

export const showSuccessMessage = (message) => {
    console.log("action", message);
    return {
        type: SHOW_SUCCESS_MESSAGE,
        payload: message
    }
}