import AbstractRenderLogoutCommand from "../../../gen/common/commands/AbstractRenderLogoutCommand";

export default class RenderLogoutCommand extends AbstractRenderLogoutCommand {
    execute() {
        return new Promise((resolve) => {
            this.commandData.outcome = this.ok;
            this.commandData.username = this.commandParam.username;
			resolve();
        });
    }
}

/*       S.D.G.       */
