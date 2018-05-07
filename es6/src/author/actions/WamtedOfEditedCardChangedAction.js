import AbstractWamtedOfEditedCardChangedAction from "../../../gen/author/actions/AbstractWamtedOfEditedCardChangedAction";

export default class WamtedOfEditedCardChangedAction extends AbstractWamtedOfEditedCardChangedAction {

    initActionData() {
        this.actionData.wanted = this.actionParam.wanted;
    }

}

/*       S.D.G.       */
