import AbstractMaxIntervalChangedAction from "../../../gen/box/actions/AbstractMaxIntervalChangedAction";

export default class MaxIntervalChangedAction extends AbstractMaxIntervalChangedAction {

    initActionData() {
        this.actionData.maxInterval = this.actionParam.maxInterval;
    }

}

/*       S.D.G.       */
