import AbstractGetAllUsersCommand from "../../../gen/admin/commands/AbstractGetAllUsersCommand";

export default class GetAllUsersCommand extends AbstractGetAllUsersCommand {

    initCommandData() {
        return true;
    }

    handleResponse(resolve, reject) {
        this.commandData.showDeleteUserDialog = false;
    	this.commandData.outcome = this.ok;
    	resolve();
    }
    handleError(resolve, reject) {
    	reject(this.commandData.error);
    }
}

/*       S.D.G.       */
