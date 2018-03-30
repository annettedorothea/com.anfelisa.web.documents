import AbstractShowNextWordOfTestAction from "../../../gen/vocabulary/actions/AbstractShowNextWordOfTestAction";
import * as VocabularyView from "../views/VocabularyView";

export default class ShowNextWordOfTestAction extends AbstractShowNextWordOfTestAction {

    captureActionParam() {
		this.actionParam.nextRandomIndex = VocabularyView.Vocabulary.testState.nextRandomIndex();
    }

    initActionData() {
		this.actionData.nextRandomIndex = this.actionParam.nextRandomIndex;
    }

}

/*       S.D.G.       */
