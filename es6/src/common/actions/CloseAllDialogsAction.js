import AbstractCloseAllDialogsAction from "../../../gen/common/actions/AbstractCloseAllDialogsAction";

class CloseAllDialogsAction extends AbstractCloseAllDialogsAction {

    captureActionParam() {
    }

    initActionData() {
    }

    releaseActionParam() {
		bootbox.hideAll();
    }
}

/*       S.D.G.       */
