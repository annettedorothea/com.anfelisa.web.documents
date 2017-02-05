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

/*       S.D.G.       */
