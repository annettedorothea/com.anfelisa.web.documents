import AbstractSaveRoleCommand from "../../../gen/admin/commands/AbstractSaveRoleCommand";

export default class SaveRoleCommand extends AbstractSaveRoleCommand {

    initCommandData() {
        return true;
    }

    handleResponse(resolve) {
    	this.commandData.outcome = this.ok;
    	resolve();
    }
    handleError(resolve, reject) {
    	reject(this.commandData.error);
    }
}

/*       S.D.G.       */
