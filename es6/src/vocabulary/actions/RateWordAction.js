import AbstractRateWordAction from "../../../gen/vocabulary/actions/AbstractRateWordAction";
import * as VocabularyView from "../views/VocabularyView";

export default class RateWordAction extends AbstractRateWordAction {

    captureActionParam() {
    }

    initActionData() {
		this.actionData.knewIt = this.actionParam.knewIt;
		this.actionData.id = jQuery(".active").attr("id");
		this.actionData.wordCount = VocabularyView.Vocabulary.testState.wordCount;
		this.actionData.strikeCount = VocabularyView.Vocabulary.testState.strikeCount;
		this.actionData.points = VocabularyView.Vocabulary.testState.points;
		this.actionData.strikesOfWord = jQuery("#" + this.actionData.id + "_shots").children(".strike").length;
    }

    releaseActionParam() {
    }
}

/*       S.D.G.       */
