import AbstractGetAllUsersCommand from "../../../gen/admin/commands/AbstractGetAllUsersCommand";

export default class GetAllUsersCommand extends AbstractGetAllUsersCommand {

    initCommandData() {
    	//add from appState to commandData 
    }

    isCommandDataValid() {
    	return true;
    }

    handleResponse(resolve, reject) {
        this.commandData.userList = data.userList;
        this.commandData.showDeleteUserDialog = false;
    	this.commandData.outcome = this.ok;
    	resolve();
    }
    handleError(resolve, reject) {
    	reject(this.commandData.error);
    }
}

/*       S.D.G.       */
