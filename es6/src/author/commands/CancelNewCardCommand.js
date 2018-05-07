import AbstractCancelNewCardCommand from "../../../gen/author/commands/AbstractCancelNewCardCommand";

export default class CancelNewCardCommand extends AbstractCancelNewCardCommand {
    execute() {
        return new Promise((resolve, reject) => {
            this.commandData.outcome = this.ok;
            resolve();
        });
    }
}

/*       S.D.G.       */
