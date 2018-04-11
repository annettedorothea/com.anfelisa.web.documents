import AbstractLoadAllUsersOkEvent from "../../../gen/admin/events/AbstractLoadAllUsersOkEvent";
import AppUtils from "../../app/AppUtils";

export default class LoadAllUsersOkEvent extends AbstractLoadAllUsersOkEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventParam);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
        this.eventData.data.userList.forEach((user) => {
            if (user.role === "ADMIN") {
                user.adminSelected = true;
            } else if (user.role === "AUTHOR") {
                user.authorSelected = true;
            } else if (user.role === "STUDENT") {
                user.studentSelected = true;
            }
        });
    }
}

/*       S.D.G.       */
