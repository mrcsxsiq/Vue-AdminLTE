import http from 'src/http'

export const postLogin = (username, password) => {
/*
    return http.post('https://uinames.com/api/?region=brazil&ext', {
            username,
            password
        })
        .then(response => response.data);
*/

    return http.get('https://uinames.com/api/?region=brazil&ext')
        .then(response => response.data)

}
