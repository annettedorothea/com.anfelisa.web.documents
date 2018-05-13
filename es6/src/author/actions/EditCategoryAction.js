import AbstractEditCategoryAction from "../../../gen/author/actions/AbstractEditCategoryAction";

export default class EditCategoryAction extends AbstractEditCategoryAction {

    initActionData() {
        this.actionData.index = this.actionParam.index;
        this.actionData.name = this.actionParam.name;
        this.actionData.categoryId = this.actionParam.categoryId;
        this.actionData.dictionaryLookup = this.actionParam.dictionaryLookup;
        this.actionData.givenLanguage = this.actionParam.givenLanguage;
        this.actionData.wantedLanguage = this.actionParam.wantedLanguage;
    }

}

/*       S.D.G.       */
