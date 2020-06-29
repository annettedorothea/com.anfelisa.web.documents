import AbstractGetAllUsersCommand from "../../../gen/admin/commands/AbstractGetAllUsersCommand";

export default class GetAllUsersCommand extends AbstractGetAllUsersCommand {

    validateCommandData() {
        return true;
    }

    handleResponse(resolve) {
        this.commandData.data = {
            showDeleteUserDialog: false,
            userList: this.commandData.userList
        };
        this.commandData.view = "user-list";
    	this.commandData.outcome = this.ok;
    	resolve();
    }
    handleError(resolve, reject) {
    	reject(this.commandData.error);
    }
}

/*       S.D.G.       */
