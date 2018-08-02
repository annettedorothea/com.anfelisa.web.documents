import AbstractScoreCardAction from "../../../gen/box/actions/AbstractScoreCardAction";
import * as App from "../../app/App";

export default class ScoreCardAction extends AbstractScoreCardAction {

    initActionData() {
        this.actionData.boxId = App.appState.data === undefined || App.appState.data.boxId === undefined ? undefined : App.appState.data.boxId;
        this.actionData.scoredCardScheduledCardId = App.appState.data === undefined || App.appState.data.scheduledCardId === undefined ? false : App.appState.data.scheduledCardId;
    }

}

/*       S.D.G.       */
