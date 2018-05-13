import AbstractGivenLanguageOfNewCategoryChangedAction from "../../../gen/author/actions/AbstractGivenLanguageOfNewCategoryChangedAction";

export default class GivenLanguageOfNewCategoryChangedAction extends AbstractGivenLanguageOfNewCategoryChangedAction {

    initActionData() {
        this.actionData.givenLanguage = this.actionParam.givenLanguage;
    }

}

/*       S.D.G.       */
