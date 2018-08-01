import AbstractLoadBoxStatisticsAction from "../../../gen/box/actions/AbstractLoadBoxStatisticsAction";
import * as App from "../../app/App";

export default class LoadBoxStatisticsAction extends AbstractLoadBoxStatisticsAction {

    extendActionData() {
        let date = new Date();
        date.setHours(24,0,0,0);
        this.actionData.today = date.toISOString();
    }

    initActionData() {
        this.actionData.scheduleNext = App.appState.data === undefined || App.appState.data.scheduleNext === undefined ? false : App.appState.data.scheduleNext;
    }

}

/*       S.D.G.       */
