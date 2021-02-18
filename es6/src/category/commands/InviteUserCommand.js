/********************************************************************************
 * generated by de. acegen 1.1.0
 ********************************************************************************/




import AbstractInviteUserCommand from "../../../gen/category/commands/AbstractInviteUserCommand";

export default class InviteUserCommand extends AbstractInviteUserCommand {

    validateCommandData() {
    	return true;
    }

    handleResponse(resolve) {
        this.commandData.inviteUserDialog = {
            display: false,
            usernameSearchString: ""
        };
        this.addOkOutcome()
    	resolve();
    }
    handleError(resolve, reject) {
    	reject(this.commandData.error);
    }
}




/******* S.D.G. *******/



