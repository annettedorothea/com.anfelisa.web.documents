import AbstractRepeatComplexCardCommand from "../../../gen/vocabulary/commands/AbstractRepeatComplexCardCommand";

export default class RepeatComplexCardCommand extends AbstractRepeatComplexCardCommand {
    execute() {
        return new Promise((resolve) => {
            this.commandData.hash = this.commandParam.hash;
            this.commandData.outcome = this.go;
			resolve();
        });
    }
}

/*       S.D.G.       */
