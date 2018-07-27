import AbstractPasswordChangedCommand from "../../../gen/password/commands/AbstractPasswordChangedCommand";

export default class PasswordChangedCommand extends AbstractPasswordChangedCommand {
    execute() {
        if (this.commandData.password === this.commandData.passwordRepetition) {
            this.commandData.outcome = this.match;
        } else {
            this.commandData.outcome = this.mismatch;
        }
    }
}

/*       S.D.G.       */
