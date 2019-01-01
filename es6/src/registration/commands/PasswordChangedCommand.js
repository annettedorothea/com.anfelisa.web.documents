import AbstractPasswordChangedCommand from "../../../gen/registration/commands/AbstractPasswordChangedCommand";

export default class PasswordChangedCommand extends AbstractPasswordChangedCommand {
    execute() {
        console.log("PasswordChangedCommand", this.commandData);
        if (this.commandData.password === this.commandData.passwordRepetition) {
            this.commandData.outcome = this.match;
        } else {
            this.commandData.outcome = this.mismatch;
        }
    }
}

/*       S.D.G.       */
