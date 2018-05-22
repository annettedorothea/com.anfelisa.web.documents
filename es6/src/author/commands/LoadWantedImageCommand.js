import AbstractLoadWantedImageCommand from "../../../gen/author/commands/AbstractLoadWantedImageCommand";

export default class LoadWantedImageCommand extends AbstractLoadWantedImageCommand {
    execute() {
        return new Promise((resolve, reject) => {
            this.commandData.image = this.commandParam.image;
            this.commandData.outcome = this.ok;
            resolve();
        });
    }
}

/*       S.D.G.       */
