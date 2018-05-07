import AbstractWamtedOfEditedCardChangedCommand from "../../../gen/author/commands/AbstractWamtedOfEditedCardChangedCommand";

export default class WamtedOfEditedCardChangedCommand extends AbstractWamtedOfEditedCardChangedCommand {
    execute() {
        return new Promise((resolve, reject) => {
            this.commandData.wanted = this.commandParam.wanted;
            this.commandData.outcome = this.ok;
            resolve();
        });
    }
}

/*       S.D.G.       */
