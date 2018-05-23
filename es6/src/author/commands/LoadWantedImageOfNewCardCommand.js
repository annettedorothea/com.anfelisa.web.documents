import AbstractLoadWantedImageCommand from "../../../gen/author/commands/AbstractLoadWantedImageOfNewCardCommand";

export default class LoadWantedImageOfNewCardCommand extends AbstractLoadWantedImageCommand {
    execute() {
        this.commandData.image = this.commandParam.image;
        this.commandData.outcome = this.ok;
    }
}

/*       S.D.G.       */
