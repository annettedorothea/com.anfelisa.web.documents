import AbstractDisplayNextReinforceCardCommand from "../../../gen/card/commands/AbstractDisplayNextReinforceCardCommand";

export default class DisplayNextReinforceCardCommand extends AbstractDisplayNextReinforceCardCommand {
    execute() {
        return new Promise((resolve) => {
            if (this.commandParam.cardCount > 0) {
                this.commandData.outcome = this.next;
            } else {
                this.commandData.outcome = this.finished;
            }
			resolve();
        });
    }
}

/*       S.D.G.       */
