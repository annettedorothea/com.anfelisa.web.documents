import AbstractGivenLanguageOfNewCategoryChangedCommand from "../../../gen/author/commands/AbstractGivenLanguageOfNewCategoryChangedCommand";

export default class GivenLanguageOfNewCategoryChangedCommand extends AbstractGivenLanguageOfNewCategoryChangedCommand {
    execute() {
        this.commandData.givenLanguage = this.commandParam.givenLanguage;
        this.commandData.outcome = this.ok;
    }
}

/*       S.D.G.       */
