import AbstractWantedOfNewCardChangedAction from "../../../gen/author/actions/AbstractWantedOfNewCardChangedAction";

export default class WantedOfNewCardChangedAction extends AbstractWantedOfNewCardChangedAction {

    initActionData() {
        this.actionData.wanted = this.actionParam.wanted;
    }

}

/*       S.D.G.       */
