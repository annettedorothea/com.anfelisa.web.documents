import AbstractUpdateBoxAction from "../../../gen/box/actions/AbstractUpdateBoxAction";

export default class UpdateBoxAction extends AbstractUpdateBoxAction {

    initActionData() {
        this.actionData.maxInterval = this.actionParam.maxInterval;
        this.actionData.boxId = this.actionParam.boxId;
        this.actionData.username = this.actionParam.username;
        this.actionData.password = this.actionParam.password;
    }

}

/*       S.D.G.       */
