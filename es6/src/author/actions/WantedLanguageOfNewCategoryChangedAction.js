import AbstractWantedLanguageOfNewCategoryChangedAction from "../../../gen/author/actions/AbstractWantedLanguageOfNewCategoryChangedAction";

export default class WantedLanguageOfNewCategoryChangedAction extends AbstractWantedLanguageOfNewCategoryChangedAction {

    initActionData() {
        this.actionData.wantedLanguage = this.actionParam.wantedLanguage;
    }

}

/*       S.D.G.       */
