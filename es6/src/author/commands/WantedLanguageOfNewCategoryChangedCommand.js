import AbstractWantedLanguageOfNewCategoryChangedCommand from "../../../gen/author/commands/AbstractWantedLanguageOfNewCategoryChangedCommand";

export default class WantedLanguageOfNewCategoryChangedCommand extends AbstractWantedLanguageOfNewCategoryChangedCommand {
    execute() {
        this.commandData.wantedLanguage = this.commandParam.wantedLanguage;
        this.commandData.outcome = this.ok;
    }
}

/*       S.D.G.       */
