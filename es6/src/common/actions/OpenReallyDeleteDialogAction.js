import AbstractOpenReallyDeleteDialogAction from "../../../gen/common/actions/AbstractOpenReallyDeleteDialogAction";

export default class OpenReallyDeleteDialogAction extends AbstractOpenReallyDeleteDialogAction {

    initActionData() {
		this.actionData = JSON.parse(JSON.stringify(this.actionParam));
    }
}

/*       S.D.G.       */
