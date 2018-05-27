import AbstractMaxIntervalChangedOfBoxAction from "../../../gen/box/actions/AbstractMaxIntervalChangedOfBoxAction";

export default class MaxIntervalChangedOfBoxAction extends AbstractMaxIntervalChangedOfBoxAction {

    initActionData() {
        this.actionData.maxInterval = this.actionParam.maxInterval;
    }

}

/*       S.D.G.       */
