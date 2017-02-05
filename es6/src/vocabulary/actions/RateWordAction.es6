'use strict';

class RateWordAction extends AbstractRateWordAction {

    captureActionParam() {
    }

    initActionData() {
		this.actionData.knewIt = this.actionParam.knewIt;
		this.actionData.id = jQuery(".active").attr("id");
		this.actionData.wordCount = Vocabulary.testState.wordCount;
		this.actionData.strikeCount = Vocabulary.testState.strikeCount;
		this.actionData.points = Vocabulary.testState.points;
		this.actionData.strikesOfWord = jQuery("#" + this.actionData.id + "_shots").children(".strike").length;
    }

    releaseActionParam() {
    }
}

/*       S.D.G.       */
