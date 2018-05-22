import AbstractDisplayMessageCommand from "../../../gen/common/commands/AbstractDisplayMessageCommand";

export default class DisplayMessageCommand extends AbstractDisplayMessageCommand {
    execute() {
        this.commandData.message = this.commandParam.message;
        this.commandData.outcome = this.ok;
    }
}

/*       S.D.G.       */
