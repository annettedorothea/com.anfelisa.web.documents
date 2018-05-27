import AbstractDisplayErrorCommand from "../../../gen/common/commands/AbstractDisplayErrorCommand";

export default class DisplayErrorCommand extends AbstractDisplayErrorCommand {
    execute() {
        this.commandData.outcome = this.ok;
    }
}

/*       S.D.G.       */
