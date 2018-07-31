import AbstractToggleScheduleNextAction from "../../../gen/box/actions/AbstractToggleScheduleNextAction";
import * as App from "../../app/App";

export default class ToggleScheduleNextAction extends AbstractToggleScheduleNextAction {

    initActionData() {
        this.actionData.scheduleNext = App.appState.data === undefined || App.appState.data.scheduleNext === undefined ? false : App.appState.data.scheduleNext;
    }

}

/*       S.D.G.       */
