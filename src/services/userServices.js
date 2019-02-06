import StorageService from './../storage/StorageService';
export const userService = {
    login,
    logout
};
const basePath = 'http://localhost:2000/';
function login(data) {
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    };
    return fetch(`${basePath}users`, requestOptions)
        .then(handleResponse)
        .then(user => {
            StorageService.setLogin(user);
            return user;
        });
}

function logout() {
    StorageService.clearLogin();
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 404) {
                response.statusText = 'not found';
            }
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }
        return data;
    });
}