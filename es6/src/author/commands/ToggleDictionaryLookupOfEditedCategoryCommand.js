import AbstractToggleDictionaryLookupOfEditedCategoryCommand from "../../../gen/author/commands/AbstractToggleDictionaryLookupOfEditedCategoryCommand";

export default class ToggleDictionaryLookupOfEditedCategoryCommand extends AbstractToggleDictionaryLookupOfEditedCategoryCommand {
    execute() {
        this.commandData.outcome = this.ok;
    }
}

/*       S.D.G.       */
