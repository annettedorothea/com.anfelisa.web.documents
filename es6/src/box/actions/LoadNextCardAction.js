import AbstractLoadNextCardAction from "../../../gen/box/actions/AbstractLoadNextCardAction";

export default class LoadNextCardAction extends AbstractLoadNextCardAction {

    initActionData(data) {
        let date = new Date();
        date.setHours(0, 0, 0, 0);
        data.todayAtMidnightInUTC = date.toISOString();
    }

}

/*       S.D.G.       */
