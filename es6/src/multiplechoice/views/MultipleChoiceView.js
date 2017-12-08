
export default class MultipleChoiceView {
    static showCorrecture(eventData) {
        jQuery("#" + eventData.multipleChoiceId + " i").prop("onclick", null);
    };

    static enableNextButton(eventData) {
        let button = jQuery("#" + eventData.multipleChoiceId + " button");
        button.removeClass("disabled");
        button.removeAttr("disabled");
    };

    static showFalse(eventData) {
        let item = $("#" + eventData.itemId);
        item.removeClass("fa-circle-o");
        item.addClass("fa-times-circle-o");
        item.addClass("false");
        let icon = $("#" + eventData.multipleChoiceId + "_icon");
        icon.removeClass("fa-circle-o");
        icon.addClass("fa-times-circle-o");
        icon.addClass("false");
    };

    static showCorrect(eventData) {
        let item = $("#" + eventData.itemId);
        item.removeClass("fa-circle-o");
        item.addClass("fa-check-circle-o");
        item.addClass("correct");
        let icon = $("#" + eventData.multipleChoiceId + "_icon");
        icon.removeClass("fa-circle-o");
        icon.addClass("fa-check-circle-o");
        icon.addClass("correct");
    };

    static displayNextQuestion(eventData) {
        const multipleChoiceId = eventData.multipleChoiceId;
        let mcItem = jQuery("#" + multipleChoiceId);
        mcItem.addClass("hide");
        mcItem.removeClass("show");
        let nextMcItem = jQuery("#" + (multipleChoiceId + 1));
        nextMcItem.addClass("show");
        nextMcItem.removeClass("hide");
    };

}

/*                    S.D.G.                    */
