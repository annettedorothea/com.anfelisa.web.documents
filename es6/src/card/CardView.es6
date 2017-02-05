'use strict';

class CardView {
    static showScoreButtons(eventData) {
        Mousetrap.unbind('enter');
        Mousetrap.unbind('alt+enter');
        $('.quality-buttons button').removeAttr("disabled");
        Mousetrap.bind('q', function () {
            $(".quality-buttons .btn-green").click()
        });
        Mousetrap.bind('a', function () {
            $(".quality-buttons .btn-blue").click()
        });
        Mousetrap.bind('y', function () {
            $(".quality-buttons .btn-cyan").click()
        });
        Mousetrap.bind('w', function () {
            $(".quality-buttons .btn-orange").click()
        });
        Mousetrap.bind('s', function () {
            $(".quality-buttons .btn-red").click()
        });
        Mousetrap.bind('x', function () {
            $(".quality-buttons .btn-pink").click()
        });

        // in test mode
        var finishCardButton3 = $('#finishCardButton3');
        finishCardButton3.removeAttr("disabled");
        finishCardButton3.removeClass("disabled");
        var finishCardButton2 = $('#finishCardButton2');
        finishCardButton2.removeAttr("disabled");
        finishCardButton2.removeClass("disabled");
        var finishCardButton1 = $('#finishCardButton1');
        finishCardButton1.removeAttr("disabled");
        finishCardButton1.removeClass("disabled");
        var repeatCardButton = $('#repeatCardButton');
        repeatCardButton.removeAttr("disabled");
        repeatCardButton.removeClass("disabled");
        let correctParagraph = $('#correctParagraph');
        correctParagraph.find('button.blueButton').addClass("btn-blue");
        correctParagraph.find('button.greenButton').addClass("btn-green");
        correctParagraph.find('button.orangeButton').addClass("btn-orange");
        correctParagraph.find('button.redButton').addClass("btn-red");
    };
    
    static showWanted(eventData) {
        Mousetrap.unbind('enter');
        $('.wanted-word').show();
    };
    
    static showNextLine(eventData) {
        var nextLine = $(".line.hiddenLine").first();
        nextLine.removeClass("hiddenLine");
        nextLine.children().removeClass("hiddenWord");
    };
    
    static showNextWord(eventData) {
        var nextWord = $(".line.hiddenLine .word.hiddenWord").first();
        nextWord.removeClass("hiddenWord");
        if (nextWord.is(':last-child')) {
            nextWord.parent().removeClass("hiddenLine");
        }
    };
    
    static displayComplexCardFinishedSuccessfully(eventData) {
    };
    
}

/*                    S.D.G.                    */
