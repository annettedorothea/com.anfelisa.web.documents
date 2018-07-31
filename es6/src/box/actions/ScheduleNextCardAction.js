import AbstractScheduleNextCardAction from "../../../gen/box/actions/AbstractScheduleNextCardAction";
import * as App from "../../app/App";

export default class ScheduleNextCardAction extends AbstractScheduleNextCardAction {

    initActionData() {
        this.actionData.boxId = App.appState.data === undefined || App.appState.data.boxId === undefined ? undefined : App.appState.data.boxId;
    }

}

/*       S.D.G.       */
