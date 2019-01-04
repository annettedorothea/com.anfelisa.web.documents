import AbstractLoadWantedImageOfNewCardCommand from "../../../gen/card/commands/AbstractLoadWantedImageOfNewCardCommand";

export default class LoadWantedImageOfNewCardCommand extends AbstractLoadWantedImageOfNewCardCommand {
    execute() {
    	this.commandData.outcome = this.ok;
    }
}

/*       S.D.G.       */
