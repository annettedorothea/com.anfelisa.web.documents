import AbstractCloseAllDialogsCommand from "../../../gen/common/commands/AbstractCloseAllDialogsCommand";

class CloseAllDialogsCommand extends AbstractCloseAllDialogsCommand {
    execute() {
        return new Promise((resolve) => {
            this.commandData.outcome = this.ok;
			resolve();
        });
    }
}

/*       S.D.G.       */
