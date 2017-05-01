/**
 * Created by annette on 07.01.16.
 */

'use strict';

function initApp() {

    new InitAction().apply();
}

initApp();

ACEController.verificationCleanupFunction = function (key, value) {
    if (key === 'timestamp' || key === 'token' || key === 'nextRandomIndex' || key === 'id' || key === 'next' || key === 'last' || key === 'date' || key === 'day' || key === 'month' || key === 'year') {
        return undefined;
    } else {
        return value;
    }
};

function basicAuth(user, password) {
    if (user !== undefined && password !== undefined) {
        const wordArray = CryptoJS.enc.Utf8.parse(user + ':' + password);
        const hash = CryptoJS.enc.Base64.stringify(wordArray);
        return "oapBasic " + hash;
    }
    return undefined;
}

/*       S.D.G.       */
