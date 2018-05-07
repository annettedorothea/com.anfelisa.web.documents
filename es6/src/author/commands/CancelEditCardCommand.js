import AbstractCancelEditCardCommand from "../../../gen/author/commands/AbstractCancelEditCardCommand";

export default class CancelEditCardCommand extends AbstractCancelEditCardCommand {
    execute() {
        return new Promise((resolve, reject) => {
            this.commandData.outcome = this.ok;
            resolve();
        });
    }
}

/*       S.D.G.       */
