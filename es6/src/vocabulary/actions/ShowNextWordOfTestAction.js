import AbstractShowNextWordOfTestAction from "../../../gen/vocabulary/actions/AbstractShowNextWordOfTestAction";
import Vocabulary from "../views/VocabularyView";

export default class ShowNextWordOfTestAction extends AbstractShowNextWordOfTestAction {

    captureActionParam() {
		this.actionParam.nextRandomIndex = Vocabulary.testState.nextRandomIndex();
    }

    initActionData() {
		this.actionData.nextRandomIndex = this.actionParam.nextRandomIndex;
    }

    releaseActionParam() {
    }
}

/*       S.D.G.       */
