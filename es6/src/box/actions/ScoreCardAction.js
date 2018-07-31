import AbstractScoreCardAction from "../../../gen/box/actions/AbstractScoreCardAction";
import * as App from "../../app/App";

export default class ScoreCardAction extends AbstractScoreCardAction {

    initActionData() {
        this.actionData.boxId = App.appState.data === undefined || App.appState.data.boxId === undefined ? undefined : App.appState.data.boxId;
        this.actionData.scheduledCardId = App.appState.data === undefined || App.appState.data.scheduledCardId === undefined ? false : App.appState.data.scheduledCardId;
        this.actionData.scheduleNext = App.appState.data === undefined || App.appState.data.scheduleNext === undefined ? false : App.appState.data.scheduleNext;
    }

}

/*       S.D.G.       */
