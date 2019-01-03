import AbstractGivenLanguageChangedCommand from "../../../gen/category/commands/AbstractGivenLanguageChangedCommand";

export default class GivenLanguageChangedCommand extends AbstractGivenLanguageChangedCommand {
    execute() {
    	this.commandData.outcome = this.ok;
    }
}

/*       S.D.G.       */
