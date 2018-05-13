import AbstractTranslateAction from "../../../gen/author/actions/AbstractTranslateAction";

export default class TranslateAction extends AbstractTranslateAction {

    initActionData() {
        this.actionData.given = this.actionParam.given;
        this.actionData.wanted = this.actionParam.wanted;
        this.actionData.lang = `${this.actionParam.givenLanguage}-${this.actionParam.wantedLanguage}`;
    }

}

/*       S.D.G.       */
