'use strict';

var Texts = {};

var CommonViewConfig = {};
class CommonView {
    static initLanguageInLocalStorage(data) {
        CommonViewConfig.language = data.language;
        try {
            localStorage.language = data.language;
        } catch (exception) {
        }
        $.get('texts/errors_' + data.language + '.json', function(texts) {
            Texts.errors = texts;
        });
        $.get('texts/common_' + data.language + '.json', function(texts) {
            Texts.common = texts;
        });
        $.get('texts/user_' + data.language + '.json', function(texts) {
            Texts.user = texts;
        });
    };

    static initUserInLocalStorage(data) {
        CommonViewConfig.username = data.username;
        CommonViewConfig.password = data.password;
        try {
            localStorage.username = data.username;
            localStorage.password = data.password;
        } catch (exception) {
        }
    };

    static removeUserFromLocalStorage(data) {
        CommonViewConfig.username = undefined;
        CommonViewConfig.password = undefined;
        try {
            localStorage.removeItem("username");
            localStorage.removeItem("password");
        } catch (exception) {
        }
    };

    static getUsername() {
        if (CommonViewConfig.username) {
            return CommonViewConfig.username;
        }
        try {
            return localStorage.username;
        } catch (exception) {
        }
        return undefined;
    }

    static getPassword() {
        if (CommonViewConfig.password) {
            return CommonViewConfig.password;
        }
        try {
            return localStorage.password;
        } catch (exception) {
        }
        return undefined;
    }

    static getLanguage() {
        if (CommonViewConfig.language) {
            return CommonViewConfig.language;
        }
        try {
            if (localStorage.language) {
                return localStorage.language;
            }
        } catch (exception) {
        }
        return "de";
    }

    static updateHash(data) {
        window.location.hash = data.hash;
    };

}

/*                    S.D.G.                    */
