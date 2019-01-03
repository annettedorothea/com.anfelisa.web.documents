import AbstractToggleScheduleNextAction from "../../../gen/box/actions/AbstractToggleScheduleNextAction";
import {getAppState} from "../../app/App";

export default class ToggleScheduleNextAction extends AbstractToggleScheduleNextAction {

    initActionData() {
        const appState = getAppState();
        this.actionData.scheduleNext = appState.data === undefined || appState.data.scheduleNext === undefined ? false : appState.data.scheduleNext;
    }

}

/*       S.D.G.       */
