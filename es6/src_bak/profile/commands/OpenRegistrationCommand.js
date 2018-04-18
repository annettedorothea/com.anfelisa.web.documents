import AbstractOpenRegistrationCommand from "../../../gen/profile/commands/AbstractOpenRegistrationCommand";

export default class OpenRegistrationCommand extends AbstractOpenRegistrationCommand {
    execute() {
        return new Promise((resolve) => {
            this.commandData.outcome = this.ok;
			resolve();
        });
    }
}

/*       S.D.G.       */
