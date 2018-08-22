import AbstractEditBoxAction from "../../../gen/box/actions/AbstractEditBoxAction";
import * as App from "../../app/App";

export default class EditBoxAction extends AbstractEditBoxAction {

    initActionData() {
        this.actionData.editedMaxInterval = App.appState.data.maxInterval;
    }

}

/*       S.D.G.       */
