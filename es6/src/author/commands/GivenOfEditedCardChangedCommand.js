import AbstractGivenOfEditedCardChangedCommand from "../../../gen/author/commands/AbstractGivenOfEditedCardChangedCommand";

export default class GivenOfEditedCardChangedCommand extends AbstractGivenOfEditedCardChangedCommand {
    execute() {
        return new Promise((resolve, reject) => {
            this.commandData.given = this.commandParam.given;
            this.commandData.outcome = this.ok;
            resolve();
        });
    }
}

/*       S.D.G.       */
