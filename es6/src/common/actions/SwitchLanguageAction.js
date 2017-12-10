import AbstractSwitchLanguageAction from "../../../gen/common/actions/AbstractSwitchLanguageAction";

export default class SwitchLanguageAction extends AbstractSwitchLanguageAction {

    captureActionParam() {
    }

    initActionData() {
   		this.actionData.language = this.actionParam.language;
    }

    releaseActionParam() {
    }
}

/*       S.D.G.       */
