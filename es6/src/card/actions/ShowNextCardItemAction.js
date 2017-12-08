import AbstractShowNextCardItemAction from "../../../gen/card/actions/AbstractShowNextCardItemAction";

class ShowNextCardItemAction extends AbstractShowNextCardItemAction {

    captureActionParam() {
    	this.actionParam = {
    		flag: this.actionParam
		}
    }

    initActionData() {
		this.actionData.flag = this.actionParam.flag;
    }

    releaseActionParam() {
    }
}

/*       S.D.G.       */