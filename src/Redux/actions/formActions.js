import { ON_SIGNUP_FORM_CHANGE } from "../ActionTypes"

export const onSignUpFormChange = (key, value) => {
    return {
        type: ON_SIGNUP_FORM_CHANGE,
        payload: {
            key,
            value
        }
    }
}