import AbstractCancelNewCardCommand from "../../../gen/author/commands/AbstractCancelNewCardCommand";

export default class CancelNewCardCommand extends AbstractCancelNewCardCommand {
    execute() {
        this.commandData.data = {
            parentDictionaryLookup: this.commandParam.parentDictionaryLookup,
            parentGivenLanguage: this.commandParam.parentGivenLanguage,
            parentWantedLanguage: this.commandParam.parentWantedLanguage
        };
        this.commandData.outcome = this.ok;
    }
}

/*       S.D.G.       */
