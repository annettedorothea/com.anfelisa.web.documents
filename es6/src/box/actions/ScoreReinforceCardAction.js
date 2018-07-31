import AbstractScoreReinforceCardAction from "../../../gen/box/actions/AbstractScoreReinforceCardAction";
import * as App from "../../app/App";

export default class ScoreReinforceCardAction extends AbstractScoreReinforceCardAction {

    initActionData() {
        this.actionData.boxId = App.appState.data === undefined || App.appState.data.boxId === undefined ? undefined : App.appState.data.boxId;
        this.actionData.reinforceCardId = App.appState.data === undefined || App.appState.data.reinforceCardId === undefined ? undefined : App.appState.data.reinforceCardId;
    }

}

/*       S.D.G.       */
