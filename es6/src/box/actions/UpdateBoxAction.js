import AbstractUpdateBoxAction from "../../../gen/box/actions/AbstractUpdateBoxAction";
import * as App from "../../app/App";

export default class UpdateBoxAction extends AbstractUpdateBoxAction {

    initActionData() {
        this.actionData.boxId = App.appState.data.boxId;
        this.actionData.maxInterval = App.appState.data.editedMaxInterval;
    }

}

/*       S.D.G.       */
