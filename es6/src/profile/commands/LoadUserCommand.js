import AbstractLoadUserCommand from "../../../gen/profile/commands/AbstractLoadUserCommand";

export default class LoadUserCommand extends AbstractLoadUserCommand {

    validateCommandData() {
        return true;
    }

    handleResponse(resolve) {
    	this.addOkOutcome();
        this.commandData.profileView = {
            username: this.commandData.username,
            email: this.commandData.email,
            role: this.commandData.role,
            showDeleteUserDialog: false
        };
    	resolve();
    }
    handleError(resolve, reject) {
    	reject(this.commandData.message);
    }
}

/*       S.D.G.       */