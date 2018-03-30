import AbstractShowWordAction from "../../../gen/vocabulary/actions/AbstractShowWordAction";

export default class ShowWordAction extends AbstractShowWordAction {

    initActionData() {
		this.actionData.solution = jQuery(".active").next().html();
    }

}

/*       S.D.G.       */
