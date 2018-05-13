import AbstractWantedLanguageOfEditedCategoryChangedAction from "../../../gen/author/actions/AbstractWantedLanguageOfEditedCategoryChangedAction";

export default class WantedLanguageOfEditedCategoryChangedAction extends AbstractWantedLanguageOfEditedCategoryChangedAction {

    initActionData() {
        this.actionData.wantedLanguage = this.actionParam.wantedLanguage;
    }

}

/*       S.D.G.       */
