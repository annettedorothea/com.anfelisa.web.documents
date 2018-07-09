import AbstractWantedLanguageOfEditedCategoryChangedCommand
    from "../../../gen/author/commands/AbstractWantedLanguageOfEditedCategoryChangedCommand";

export default class WantedLanguageOfEditedCategoryChangedCommand extends AbstractWantedLanguageOfEditedCategoryChangedCommand {
    execute() {
        this.commandData.outcome = this.ok;
    }
}

/*       S.D.G.       */
