import AbstractTranslateAction from "../../../gen/author/actions/AbstractTranslateAction";

export default class TranslateAction extends AbstractTranslateAction {

    initActionData() {
        this.actionData.given = this.actionParam.given;
        this.actionData.wanted = this.actionParam.wanted;
        this.actionData.naturalInputOrder = this.actionParam.naturalInputOrder;
        this.actionData.givenLanguage = this.actionParam.givenLanguage;
        this.actionData.wantedLanguage = this.actionParam.wantedLanguage;
        this.actionData.username = this.actionParam.username;
        this.actionData.password = this.actionParam.password;
        this.actionData.categoryId = this.actionParam.categoryId;
    }

}

/*       S.D.G.       */
