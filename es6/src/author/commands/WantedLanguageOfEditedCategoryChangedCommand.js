import AbstractWantedLanguageOfEditedCategoryChangedCommand from "../../../gen/author/commands/AbstractWantedLanguageOfEditedCategoryChangedCommand";

export default class WantedLanguageOfEditedCategoryChangedCommand extends AbstractWantedLanguageOfEditedCategoryChangedCommand {
    execute() {
        this.commandData.wantedLanguage = this.commandParam.wantedLanguage;
        this.commandData.outcome = this.ok;
    }
}

/*       S.D.G.       */
