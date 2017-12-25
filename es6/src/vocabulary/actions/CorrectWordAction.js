import AbstractCorrectWordAction from "../../../gen/vocabulary/actions/AbstractCorrectWordAction";
import * as VocabularyView from "../views/VocabularyView";

export default class CorrectWordAction extends AbstractCorrectWordAction {

    captureActionParam() {
    	let active = jQuery(".active");
		this.actionParam.answer = active.val().trim();
		this.actionParam.id = active.attr("id");
    }

    initActionData() {
		this.actionData.answer = this.actionParam.answer;
		this.actionData.id = this.actionParam.id;
		this.actionData.solution = jQuery(".active").next().html();
		this.actionData.wordCount = VocabularyView.Vocabulary.testState.wordCount;
		this.actionData.strikeCount = VocabularyView.Vocabulary.testState.strikeCount;
		this.actionData.points = VocabularyView.Vocabulary.testState.points;
		this.actionData.strikesOfWord = jQuery("#" + this.actionData.id + "_shots").children(".strike").length;
    }

    releaseActionParam() {
    }
}

/*       S.D.G.       */
