import AbstractScheduleNextCardAction from "../../../gen/box/actions/AbstractScheduleNextCardAction";

export default class ScheduleNextCardAction extends AbstractScheduleNextCardAction {

    initActionData() {
        let date = new Date();
        date.setHours(24,0,0,0);
        this.actionData.today = date.toISOString();
    }

}

/*       S.D.G.       */
