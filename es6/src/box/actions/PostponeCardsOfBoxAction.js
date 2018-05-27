import AbstractPostponeCardsOfBoxAction from "../../../gen/box/actions/AbstractPostponeCardsOfBoxAction";

export default class PostponeCardsOfBoxAction extends AbstractPostponeCardsOfBoxAction {

    initActionData() {
        this.actionData.boxId = this.actionParam.boxId;
        this.actionData.username = this.actionParam.username;
        this.actionData.password = this.actionParam.password;
    }

}

/*       S.D.G.       */
