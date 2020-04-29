import AbstractLoadNextCardAction from "../../../gen/box/actions/AbstractLoadNextCardAction";

export default class LoadNextCardAction extends AbstractLoadNextCardAction {

    initActionData() {
        let date = new Date();
        date.setHours(0, 0, 0, 0);
        this.actionData.todayAtMidnightInUTC = date.toISOString();
    }

}

/*       S.D.G.       */
