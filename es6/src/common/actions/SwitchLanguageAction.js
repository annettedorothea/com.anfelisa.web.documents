import AbstractSwitchLanguageAction from "../../../gen/common/actions/AbstractSwitchLanguageAction";

class SwitchLanguageAction extends AbstractSwitchLanguageAction {

    captureActionParam() {
    }

    initActionData() {
   		this.actionData.language = this.actionParam.language;
    }

    releaseActionParam() {
    }
}

/*       S.D.G.       */
