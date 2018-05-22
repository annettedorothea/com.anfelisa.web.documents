import AbstractDisplayMessageAction from "../../../gen/common/actions/AbstractDisplayMessageAction";

export default class DisplayMessageAction extends AbstractDisplayMessageAction {

    initActionData() {
        this.actionData.message = this.actionParam.message;
    }

}

/*       S.D.G.       */
