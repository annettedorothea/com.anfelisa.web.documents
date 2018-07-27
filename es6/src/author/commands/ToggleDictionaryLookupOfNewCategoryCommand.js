import AbstractToggleDictionaryLookupOfNewCategoryCommand
    from "../../../gen/author/commands/AbstractToggleDictionaryLookupOfNewCategoryCommand";
import ToggleDictionaryLookupOfNewCategoryAction from "../actions/ToggleDictionaryLookupOfNewCategoryAction";

export default class ToggleDictionaryLookupOfNewCategoryCommand extends AbstractToggleDictionaryLookupOfNewCategoryCommand {
    execute() {
        this.commandData.dictionaryLookup = !this.commandData.dictionaryLookup;
        this.commandData.outcome = this.ok;
    }
}

/*       S.D.G.       */
