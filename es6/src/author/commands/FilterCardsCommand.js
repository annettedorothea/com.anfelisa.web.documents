import AbstractFilterCardsCommand from "../../../gen/author/commands/AbstractFilterCardsCommand";

export default class FilterCardsCommand extends AbstractFilterCardsCommand {
    execute() {
        this.commandData.outcome = this.ok;
    }
}

/*       S.D.G.       */
