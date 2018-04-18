import AbstractCloseAllDialogsAction from "../../../gen/common/actions/AbstractCloseAllDialogsAction";

export default class CloseAllDialogsAction extends AbstractCloseAllDialogsAction {

    releaseActionParam() {
		bootbox.hideAll();
    }
}

/*       S.D.G.       */
