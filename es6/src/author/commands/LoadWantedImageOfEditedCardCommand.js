import AbstractLoadWantedImageOfEditedCardCommand from "../../../gen/author/commands/AbstractLoadWantedImageOfEditedCardCommand";

export default class LoadWantedImageOfEditedCardCommand extends AbstractLoadWantedImageOfEditedCardCommand {
    execute() {
        this.commandData.outcome = this.ok;
    }
}

/*       S.D.G.       */
