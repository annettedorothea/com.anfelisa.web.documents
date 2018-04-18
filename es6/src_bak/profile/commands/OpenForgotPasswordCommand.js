import AbstractOpenForgotPasswordCommand from "../../../gen/profile/commands/AbstractOpenForgotPasswordCommand";

export default class OpenForgotPasswordCommand extends AbstractOpenForgotPasswordCommand {
    execute() {
        return new Promise((resolve) => {
            this.commandData.outcome = this.ok;
			resolve();
        });
    }
}

/*       S.D.G.       */
