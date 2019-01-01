import AbstractLoadBoxesAction from "../../../gen/box/actions/AbstractLoadBoxesAction";

export default class LoadBoxesAction extends AbstractLoadBoxesAction {

    initActionData() {
        let date = new Date();
        date.setHours(24,0,0,0);
        this.actionData.today = date.toISOString();
    }

}

/*       S.D.G.       */
