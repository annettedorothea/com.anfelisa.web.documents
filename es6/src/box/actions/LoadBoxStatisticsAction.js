import AbstractLoadBoxStatisticsAction from "../../../gen/box/actions/AbstractLoadBoxStatisticsAction";

export default class LoadBoxStatisticsAction extends AbstractLoadBoxStatisticsAction {

    extendActionData() {
        let date = new Date();
        date.setHours(24,0,0,0);
        this.actionData.today = date.toISOString();
    }

}

/*       S.D.G.       */
