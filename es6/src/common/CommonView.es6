'use strict';

var Texts = {};

class CommonView {
    static initLanguageInLocalStorage(data) {
        localStorage.language = data.language;
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

    static initSchemaInLocalStorage(data) {
        localStorage.schema = data.schema;
    };
    
    static initUserInLocalStorage(data) {
        localStorage.username = data.username;
        localStorage.password = data.password;
    };

    static removeUserFromLocalStorage(data) {
        localStorage.removeItem("username");
        localStorage.removeItem("password");
    };

    static updateHash(data) {
        window.location.hash = data.hash;
    };

}

/*                    S.D.G.                    */
