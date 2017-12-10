import AbstractShowNextWordOfTestCommand from "../../../gen/vocabulary/commands/AbstractShowNextWordOfTestCommand";

export default class ShowNextWordOfTestCommand extends AbstractShowNextWordOfTestCommand {
    execute() {
        return new Promise((resolve) => {
            this.commandData.nextRandomIndex = this.commandParam.nextRandomIndex;
            this.commandData.outcome = this.showNextWordOfTest;
            resolve();
        });
    }
}

/*       S.D.G.       */
