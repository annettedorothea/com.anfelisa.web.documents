import AbstractToggleDictionaryLookupOfNewCategoryCommand from "../../../gen/author/commands/AbstractToggleDictionaryLookupOfNewCategoryCommand";

export default class ToggleDictionaryLookupOfNewCategoryCommand extends AbstractToggleDictionaryLookupOfNewCategoryCommand {
    execute() {
        this.commandData.outcome = this.ok;
    }
}

/*       S.D.G.       */
