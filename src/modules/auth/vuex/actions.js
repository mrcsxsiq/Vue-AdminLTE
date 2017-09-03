import * as types from './mutations-types.js'

import {postLogin} from '../services'


export const attemptLogin = (context, payload) => {

    return postLogin (payload.username, payload.password)
        .then(data => {
            context.commit(types.setToken, data.email)
            context.commit(types.setUser, data)
        })


}

export const attemptLogout = (context, payload) => {
    context.commit(types.setToken, "")
}
