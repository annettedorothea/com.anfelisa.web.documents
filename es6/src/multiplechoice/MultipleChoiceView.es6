'use strict';

class MultipleChoiceView {
    static showCorrecture(eventData) {
        jQuery("#" + eventData.multipleChoiceId + " i").prop("onclick", null);
    };
    
    static enableNextButton(eventData) {
        jQuery("#" + eventData.multipleChoiceId + " button").removeClass("disabled");
        jQuery("#" + eventData.multipleChoiceId + " button").removeAttr("disabled");
    };

    static showFalse(eventData) {
        $("#" + eventData.itemId).removeClass("fa-circle-o");
        $("#" + eventData.itemId).addClass("fa-times-circle-o");
        $("#" + eventData.itemId).addClass("false");
        $("#" + eventData.multipleChoiceId + "_icon").removeClass("fa-circle-o");
        $("#" + eventData.multipleChoiceId + "_icon").addClass("fa-times-circle-o");
        $("#" + eventData.multipleChoiceId + "_icon").addClass("false");
    };
    
    static showCorrect(eventData) {
        $("#" + eventData.itemId).removeClass("fa-circle-o");
        $("#" + eventData.itemId).addClass("fa-check-circle-o");
        $("#" + eventData.itemId).addClass("correct");
        $("#" + eventData.multipleChoiceId + "_icon").removeClass("fa-circle-o");
        $("#" + eventData.multipleChoiceId + "_icon").addClass("fa-check-circle-o");
        $("#" + eventData.multipleChoiceId + "_icon").addClass("correct");
    };
    
    static displayNextQuestion(eventData) {
        var multipleChoiceId = eventData.multipleChoiceId;
        jQuery("#" + multipleChoiceId).addClass("hide");
        jQuery("#" + multipleChoiceId).removeClass("show");
        multipleChoiceId++;
        jQuery("#" + multipleChoiceId).addClass("show");
        jQuery("#" + multipleChoiceId).removeClass("hide");
    };

}

/*                    S.D.G.                    */
