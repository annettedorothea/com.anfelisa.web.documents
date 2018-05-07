import AbstractCancelDeleteCardCommand from "../../../gen/author/commands/AbstractCancelDeleteCardCommand";

export default class CancelDeleteCardCommand extends AbstractCancelDeleteCardCommand {
    execute() {
        return new Promise((resolve, reject) => {
            this.commandData.outcome = this.ok;
            resolve();
        });
    }
}

/*       S.D.G.       */
