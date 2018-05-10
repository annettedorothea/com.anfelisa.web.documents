import AbstractWantedOfEditedCardChangedAction from "../../../gen/author/actions/AbstractWantedOfEditedCardChangedAction";

export default class WantedOfEditedCardChangedAction extends AbstractWantedOfEditedCardChangedAction {

    initActionData() {
        this.actionData.wanted = this.actionParam.wanted;
    }

}

/*       S.D.G.       */
