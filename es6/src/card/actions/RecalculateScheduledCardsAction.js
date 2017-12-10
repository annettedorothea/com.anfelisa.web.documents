import AbstractRecalculateScheduledCardsAction from "../../../gen/card/actions/AbstractRecalculateScheduledCardsAction";
import CommonView from "../../common/views/CommonView";

export default class RecalculateScheduledCardsAction extends AbstractRecalculateScheduledCardsAction {

    captureActionParam() {
        this.actionParam.username = CommonView.getUsername();
        this.actionParam.password = CommonView.getPassword();
    }

    initActionData() {
        this.actionData.boxId = this.actionParam.boxId;
        this.actionData.daysBehind = this.actionParam.daysBehind;
        this.actionData.username = this.actionParam.username;
        this.actionData.password = this.actionParam.password;
    }

    releaseActionParam() {
    }
}

/*       S.D.G.       */
