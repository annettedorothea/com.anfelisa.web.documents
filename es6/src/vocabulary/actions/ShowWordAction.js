import AbstractShowWordAction from "../../../gen/vocabulary/actions/AbstractShowWordAction";

export default class ShowWordAction extends AbstractShowWordAction {

    captureActionParam() {
    }

    initActionData() {
		this.actionData.solution = jQuery(".active").next().html();
    }

    releaseActionParam() {
    }
}

/*       S.D.G.       */
