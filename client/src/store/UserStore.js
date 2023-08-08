import {makeAutoObservable} from "mobx";

export default class UserStore {
    constructor() {
        this._isAuth = false //_ not changeble variable
        this._user = {}
        makeAutoObservable(this) //mobx looks for this variable changes 
    }
// functions that changes parametrs 
    setIsAuth(bool) {
        this._isAuth = bool
    }
    setUser(user) {
        this._user = user
    }

//receive variables from our conditions when variable is changed in constructor function  
    get isAuth() {
        return this._isAuth
    }
    get user() {
        return this._user
    }
}