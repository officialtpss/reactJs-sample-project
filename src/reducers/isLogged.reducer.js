import StorageService from './../storage/StorageService';
export function isLogged(state = {}) {
    return {
         logedIn: (StorageService.getLogin()===null)? false: true
      };    
}