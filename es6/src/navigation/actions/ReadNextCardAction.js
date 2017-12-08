import AbstractReadNextCardAction from "../../../gen/navigation/actions/AbstractReadNextCardAction";

class ReadNextCardAction extends AbstractReadNextCardAction {

    captureActionParam() {
		this.actionParam.username = CommonView.getUsername();
		this.actionParam.password = CommonView.getPassword();
    }

    initActionData() {
		this.actionData.username = this.actionParam.username;
		this.actionData.password = this.actionParam.password;
    	this.actionData.boxId = this.actionParam.boxId;
    }

    releaseActionParam() {
    }
}

/*       S.D.G.       */
