import AbstractPasswordChangedCommand from "../../../gen/password/commands/AbstractPasswordChangedCommand";

export default class PasswordChangedCommand extends AbstractPasswordChangedCommand {
    execute() {
        this.commandData.passwordMismatch = this.commandData.password !== this.commandData.passwordRepetition;
        this.addOkOutcome();
    }
}

/*       S.D.G.       */
