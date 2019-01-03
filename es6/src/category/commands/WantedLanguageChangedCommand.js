import AbstractWantedLanguageChangedCommand from "../../../gen/category/commands/AbstractWantedLanguageChangedCommand";

export default class WantedLanguageChangedCommand extends AbstractWantedLanguageChangedCommand {
    execute() {
    	this.commandData.outcome = this.ok;
    }
}

/*       S.D.G.       */
