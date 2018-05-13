import AbstractGivenLanguageOfEditedCategoryChangedCommand from "../../../gen/author/commands/AbstractGivenLanguageOfEditedCategoryChangedCommand";

export default class GivenLanguageOfEditedCategoryChangedCommand extends AbstractGivenLanguageOfEditedCategoryChangedCommand {
    execute() {
        this.commandData.givenLanguage = this.commandParam.givenLanguage;
        this.commandData.outcome = this.ok;
    }
}

/*       S.D.G.       */
