import AbstractDisplayErrorAction from "../../../gen/common/actions/AbstractDisplayErrorAction";

export default class DisplayErrorAction extends AbstractDisplayErrorAction {

    initActionData() {
        this.actionData.error = this.actionParam.error;
    }

}

/*       S.D.G.       */
