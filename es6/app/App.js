'use strict';

console.log("alte APP");

$.ajaxSetup({cache: false});

$('.ajax-busy').hide();

$(document).ajaxStart(function () {
    $('.ajax-busy').show();
}).ajaxStop(function () {
    $('.ajax-busy').hide();
});

if (screen.width < 992) {
    $('div.header div.container').addClass('container-fluid').removeClass('container');
    $('div.main-pane').addClass('container-fluid').removeClass('container');
} else {
    $('div.header div.form-inline').addClass('pull-right');
    const random = Math.random();
    const index = Math.floor(random * 5);
    if (index === 0) {
        $('body').addClass('water');
    } else if (index === 1) {
        $('body').addClass('flower');
    } else if (index === 2) {
        $('body').addClass('grass');
    } else if (index === 3) {
        $('body').addClass('sunflowers');
    } else if (index === 4) {
        $('body').addClass('sea');
    }
}

AppUtils.start();

let focusedElement = null;

function insertSpecialCharacter(character) {
    if (focusedElement !== null) {
        focusedElement.val(focusedElement.val() + character);
        focusedElement.focus();
    }
}

/*       S.D.G.       */

'use strict';
