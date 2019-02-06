
const StorageService = {
    setLogin: function (data) {
        localStorage.setItem('_login', JSON.stringify(data));
    },
    getLogin: function () {
        return localStorage.getItem('_login') == null ? null : JSON.parse(localStorage.getItem('_login'));
    },
    clearLogin: function () {
        localStorage.removeItem('_login');
    }
};
export default StorageService;


