import AbstractDisplayNextReinforceCardAction from "../../../gen/card/actions/AbstractDisplayNextReinforceCardAction";
import CommonView from "../../common/views/CommonView";
import * as ReinforceView from "../views/ReinforceView";

export default class DisplayNextReinforceCardAction extends AbstractDisplayNextReinforceCardAction {

    captureActionParam() {
        this.actionParam.username = CommonView.getUsername();
        this.actionParam.password = CommonView.getPassword();
    }

    initActionData() {
    	this.actionData.username = this.actionParam.username;
    	this.actionData.password = this.actionParam.password;
        this.actionData.cardCount = ReinforceView.ReinforceCardList.reinforceCardList !== null? ReinforceView.ReinforceCardList.reinforceCardList.length : 0;
    }

}

/*       S.D.G.       */
