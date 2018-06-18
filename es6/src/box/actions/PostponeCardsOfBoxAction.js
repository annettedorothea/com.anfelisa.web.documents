import AbstractPostponeCardsOfBoxAction from "../../../gen/box/actions/AbstractPostponeCardsOfBoxAction";

export default class PostponeCardsOfBoxAction extends AbstractPostponeCardsOfBoxAction {

    initActionData() {
        let date = new Date();
        date.setHours(24,0,0,0);
        this.actionData.today = date.toISOString();
    }

}

/*       S.D.G.       */
