import AbstractCheckIfComplexCardIsFinishedCommand from "../../../gen/card/commands/AbstractCheckIfComplexCardIsFinishedCommand";

export default class CheckIfComplexCardIsFinishedCommand extends AbstractCheckIfComplexCardIsFinishedCommand {
    execute() {
        return new Promise((resolve) => {
            if (this.commandParam.isFinished) {
                this.commandData.outcome = this.complexCardIsFinished;
            } else {
                this.commandData.outcome = this.complexCardIsNotFinished;
            }
            resolve();
        });
    }
}

/*       S.D.G.       */