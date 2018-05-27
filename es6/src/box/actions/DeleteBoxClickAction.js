import AbstractDeleteBoxClickAction from "../../../gen/box/actions/AbstractDeleteBoxClickAction";

export default class DeleteBoxClickAction extends AbstractDeleteBoxClickAction {

    initActionData() {
        this.actionData.boxId = this.actionParam.boxId;
    }

}

/*       S.D.G.       */
