import AbstractCancelNewCardAction from "../../../gen/author/actions/AbstractCancelNewCardAction";

export default class CancelNewCardAction extends AbstractCancelNewCardAction {

    initActionData() {
        this.actionData.parentDictionaryLookup = this.actionParam.parentDictionaryLookup;
        this.actionData.parentGivenLanguage = this.actionParam.parentGivenLanguage;
        this.actionData.parentWantedLanguage = this.actionParam.parentWantedLanguage;
    }
}

/*       S.D.G.       */
