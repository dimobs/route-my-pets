const baseUrl = 'http://localhost:3030';


export const logout = async (token) => {
    await fetch(`${baseUrl}/users/logout`, {
        method: 'GET',
        headers: {
            'X-Authorization': token,
        }
    });
}

export const login = async (email, password) => {
    let res = await fetch(`${baseUrl}/users/login`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    })

    let jsonResult = await res.json();
    console.log('dadsasda');
    if (res.ok) {
        return jsonResult;
    } else {
        throw jsonResult.message;
    }
}

export const getUser = () => {
    let username = localStorage.getItem('username');
    return username;
}

export const isAuthenticated = () => {
    return Boolean(getUser());
}

export const register = (email, password) => {
    return fetch(`${baseUrl}/users/register`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    })
        .then(res => res.json());
}

