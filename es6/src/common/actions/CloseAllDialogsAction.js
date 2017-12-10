import AbstractCloseAllDialogsAction from "../../../gen/common/actions/AbstractCloseAllDialogsAction";

export default class CloseAllDialogsAction extends AbstractCloseAllDialogsAction {

    captureActionParam() {
    }

    initActionData() {
    }

    releaseActionParam() {
		bootbox.hideAll();
    }
}

/*       S.D.G.       */
