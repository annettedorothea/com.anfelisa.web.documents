import AbstractEmailChangedCommand from "../../../gen/registration/commands/AbstractEmailChangedCommand";

export default class EmailChangedCommand extends AbstractEmailChangedCommand {
    execute() {
        this.commandData.emailInvalid = /(.+)@(.+){2,}\.(.+){2,}/.test(this.commandData.email) === false;
        this.addOkOutcome();
    }
}

/*       S.D.G.       */
