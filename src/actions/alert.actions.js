export const alertActions = {
    success,
    error,
    clear
};

function success(message) {
    return { type: 'success', message };
}

function error(message) {
    return { type: 'error', message };
}

function clear() {
    return { type: 'clear'};
}