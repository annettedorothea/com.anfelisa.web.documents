import AbstractGetAllUsersCommand from "../../../gen/admin/commands/AbstractGetAllUsersCommand";

export default class GetAllUsersCommand extends AbstractGetAllUsersCommand {

    validateCommandData() {
        return true;
    }

    handleResponse(resolve) {
        this.commandData.userListView = {
            showDeleteUserDialog: false,
            userList: this.commandData.userList
        };
    	this.addOkOutcome();
    	resolve();
    }
    handleError(resolve, reject) {
    	reject(this.commandData.message);
    }
}

/*       S.D.G.       */
