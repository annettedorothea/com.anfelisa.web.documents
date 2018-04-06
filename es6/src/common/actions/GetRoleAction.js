import AbstractGetRoleAction from "../../../gen/common/actions/AbstractGetRoleAction";
import CommonView from "../views/CommonView";

export default class GetRoleAction extends AbstractGetRoleAction {

    initActionData() {
        this.actionData.username = CommonView.getUsername();
        this.actionData.password = CommonView.getPassword();
    }

}

/*       S.D.G.       */
