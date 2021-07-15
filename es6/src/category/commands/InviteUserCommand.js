/********************************************************************************
 * generated by de.acegen 1.3.0
 ********************************************************************************/




import AbstractInviteUserCommand from "../../../gen/category/commands/AbstractInviteUserCommand";

export default class InviteUserCommand extends AbstractInviteUserCommand {

    validateCommandData(data) {
    	return true;
    }

    handleResponse(data, resolve, reject) {
        data.inviteUserDialog = {
            display: false,
            usernameSearchString: ""
        };
    	this.addOkOutcome(data);
    	resolve(data);
    }
    handleError(data, resolve, reject) {
    	reject(data.error);
    }
}




/******* S.D.G. *******/



