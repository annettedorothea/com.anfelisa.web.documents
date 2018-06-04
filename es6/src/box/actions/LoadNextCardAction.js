import AbstractLoadNextCardAction from "../../../gen/box/actions/AbstractLoadNextCardAction";

export default class LoadNextCardAction extends AbstractLoadNextCardAction {

    initActionData() {
        let date = new Date();
        date.setHours(24,0,0,0);
        this.actionData.today = date.toISOString();
    }

}

/*       S.D.G.       */
