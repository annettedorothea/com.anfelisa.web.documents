import AbstractGivenOfNewCardChangedCommand from "../../../gen/author/commands/AbstractGivenOfNewCardChangedCommand";

export default class GivenOfNewCardChangedCommand extends AbstractGivenOfNewCardChangedCommand {
    execute() {
        return new Promise((resolve, reject) => {
            this.commandData.given = this.commandParam.given;
            this.commandData.outcome = this.ok;
            resolve();
        });
    }
}

/*       S.D.G.       */
