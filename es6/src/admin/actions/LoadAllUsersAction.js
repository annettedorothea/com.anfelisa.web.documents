import AbstractLoadAllUsersAction from "../../../gen/admin/actions/AbstractLoadAllUsersAction";
import CommonView from "../../common/views/CommonView";

export default class LoadAllUsersAction extends AbstractLoadAllUsersAction {

    initActionData() {
        this.actionData.username = CommonView.getUsername();
        this.actionData.password = CommonView.getPassword();
    }

}

/*       S.D.G.       */
