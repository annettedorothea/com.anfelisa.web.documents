import AbstractTranslateAction from "../../../gen/author/actions/AbstractTranslateAction";

export default class TranslateAction extends AbstractTranslateAction {

    initActionData() {
        this.actionData.given = this.actionParam.given;
        this.actionData.wanted = this.actionParam.wanted;
        this.actionData.naturalInputOrder = this.actionParam.naturalInputOrder;
        if (this.actionParam.naturalInputOrder === true) {
            this.actionData.lang = `${this.actionParam.givenLanguage}-${this.actionParam.wantedLanguage}`;
        } else {
            this.actionData.lang = `${this.actionParam.wantedLanguage}-${this.actionParam.givenLanguage}`;

        }
    }

}

/*       S.D.G.       */
