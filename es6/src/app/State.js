export class State {
    constructor(language, main) {
        this._language = language;
        this._main = main;
    }

    get language() {
        return this._language;
    }

    set language(language) {
        this._language = language;
    }

    get main() {
        return this._main;
    }

    set main(value) {
        this._main = value;
    }

    get registration() {
        if (this._main instanceof Registration) {
            return this._main;
        } else {
            return null;
        }
    }
}

export class Registration {
    constructor(username, password1, password2, email) {
        this._username = username;
        this._password1 = password1;
        this._password2 = password2;
        this._email = email;
        this._list = [];
    }

    get username() {
        return this._username;
    }

    set username(value) {
        this._username = value;
    }

    get password1() {
        return this._password1;
    }

    set password1(value) {
        this._password1 = value;
    }

    get password2() {
        return this._password2;
    }

    set password2(value) {
        this._password2 = value;
    }

    get email() {
        return this._email;
    }

    set email(value) {
        this._email = value;
    }

    get list() {
        return this._list;
    }

    set list(value) {
        this._list = list;
    }
}

export class ListElement {
    constructor(id) {
        this._id = id;
    }

    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }
}
