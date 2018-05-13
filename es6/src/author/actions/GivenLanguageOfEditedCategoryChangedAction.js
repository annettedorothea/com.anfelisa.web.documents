import AbstractGivenLanguageOfEditedCategoryChangedAction from "../../../gen/author/actions/AbstractGivenLanguageOfEditedCategoryChangedAction";

export default class GivenLanguageOfEditedCategoryChangedAction extends AbstractGivenLanguageOfEditedCategoryChangedAction {

    initActionData() {
        this.actionData.givenLanguage = this.actionParam.givenLanguage;
    }

}

/*       S.D.G.       */
