import AbstractFinishCardAction from "../../../gen/card/actions/AbstractFinishCardAction";

export default class FinishCardAction extends AbstractFinishCardAction {

    initActionData() {
		this.actionData.points = this.actionParam.points;
		this.actionData.maxPoints = this.actionParam.maxPoints;
    }
}

/*       S.D.G.       */
