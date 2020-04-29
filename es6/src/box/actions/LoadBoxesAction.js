import AbstractLoadBoxesAction from "../../../gen/box/actions/AbstractLoadBoxesAction";

export default class LoadBoxesAction extends AbstractLoadBoxesAction {

    initActionData() {
        let date = new Date();
        date.setHours(0,0,0,0);
        this.actionData.todayAtMidnightInUTC = date.toISOString();
    }

}

/*       S.D.G.       */
