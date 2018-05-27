import AbstractEditBoxAction from "../../../gen/box/actions/AbstractEditBoxAction";

export default class EditBoxAction extends AbstractEditBoxAction {

    initActionData() {
        this.actionData.boxId = this.actionParam.boxId;
        this.actionData.maxInterval = this.actionParam.maxInterval;
        this.actionData.maxIntervalChecked = this.actionParam.maxIntervalChecked;
    }

}

/*       S.D.G.       */
