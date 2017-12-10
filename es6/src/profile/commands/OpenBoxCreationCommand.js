import AbstractOpenBoxCreationCommand from "../../../gen/profile/commands/AbstractOpenBoxCreationCommand";

export default class OpenBoxCreationCommand extends AbstractOpenBoxCreationCommand {
    execute() {
        return new Promise((resolve) => {
            this.commandData.outcome = this.ok;
            resolve();
        });
    }
}

/*       S.D.G.       */
