import AbstractUsernameForgotPasswordChangedCommand from "../../../gen/password/commands/AbstractUsernameForgotPasswordChangedCommand";

export default class UsernameForgotPasswordChangedCommand extends AbstractUsernameForgotPasswordChangedCommand {
    execute() {
    	this.commandData.outcome = this.ok;
    }
}

/*       S.D.G.       */
