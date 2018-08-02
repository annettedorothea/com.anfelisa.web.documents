import AbstractLoadNextReinforceCardAction from "../../../gen/box/actions/AbstractLoadNextReinforceCardAction";
import * as App from "../../app/App";

export default class LoadNextReinforceCardAction extends AbstractLoadNextReinforceCardAction {

    initActionData() {
        this.actionData.boxId = App.appState.data === undefined || App.appState.data.boxId === undefined ? undefined : App.appState.data.boxId;
    }

}

/*       S.D.G.       */
