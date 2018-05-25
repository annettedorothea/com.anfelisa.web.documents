import AbstractLoadBoxesAction from "../../../gen/box/actions/AbstractLoadBoxesAction";

export default class LoadBoxesAction extends AbstractLoadBoxesAction {

    initActionData() {
        this.actionData.username = this.actionParam.username;
        this.actionData.password = this.actionParam.password;
    }

}

/*       S.D.G.       */
