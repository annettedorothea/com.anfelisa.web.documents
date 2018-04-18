import AbstractSwitchLanguageCommand from "../../../gen/common/commands/AbstractSwitchLanguageCommand";

export default class SwitchLanguageCommand extends AbstractSwitchLanguageCommand {
    execute() {
        return new Promise((resolve) => {
            this.commandData.language = this.commandParam.language;
            this.commandData.outcome = this.ok;
			resolve();
        });
    }
}

/*       S.D.G.       */
