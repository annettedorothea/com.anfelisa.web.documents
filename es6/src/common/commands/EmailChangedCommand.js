import AbstractEmailChangedCommand from "../../../gen/common/commands/AbstractEmailChangedCommand";

export default class EmailChangedCommand extends AbstractEmailChangedCommand {
    execute() {
        if (/(.+)@(.+){2,}\.(.+){2,}/.test(this.commandData.email) === false) {
            this.commandData.outcome = this.invalid;
        } else {
            this.commandData.outcome = this.valid;
        }
    }
}

/*       S.D.G.       */
