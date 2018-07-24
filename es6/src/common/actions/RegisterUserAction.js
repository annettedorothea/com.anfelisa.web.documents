import AbstractRegisterUserAction from "../../../gen/common/actions/AbstractRegisterUserAction";
import AppUtils from "../../app/AppUtils";

export default class RegisterUserAction extends AbstractRegisterUserAction {

    initActionData() {
        this.actionData.token = AppUtils.createUUID();
    }

}

/*       S.D.G.       */
