import AbstractSwitchLanguageAction from "../../../gen/common/actions/AbstractSwitchLanguageAction";

export default class SwitchLanguageAction extends AbstractSwitchLanguageAction {

    initActionData() {
   		this.actionData.language = this.actionParam.language;
    }

}

/*       S.D.G.       */
