import AbstractCreateCategoryAction from "../../../gen/author/actions/AbstractCreateCategoryAction";

export default class CreateCategoryAction extends AbstractCreateCategoryAction {

    initActionData() {
        this.actionData.username = this.actionParam.username;
        this.actionData.password = this.actionParam.password;
        this.actionData.categoryName = this.actionParam.categoryName;
        this.actionData.categoryIndex = this.actionParam.categoryIndex;
        this.actionData.parentCategoryId = this.actionParam.parentCategoryId;
        this.actionData.dictionaryLookup = this.actionParam.dictionaryLookup;
        this.actionData.givenLanguage = this.actionParam.givenLanguage;
        this.actionData.wantedLanguage = this.actionParam.wantedLanguage;
    }

}

/*       S.D.G.       */
