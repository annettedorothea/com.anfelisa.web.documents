import AbstractFilterCardsAction from "../../../gen/author/actions/AbstractFilterCardsAction";

export default class FilterCardsAction extends AbstractFilterCardsAction {

    initActionData() {
        this.actionData.filter = this.actionParam.filter;
    }

}

/*       S.D.G.       */
