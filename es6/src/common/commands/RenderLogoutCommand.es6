'use strict';

class RenderLogoutCommand extends AbstractRenderLogoutCommand {
    execute() {
        return new Promise((resolve) => {
            this.commandData.outcome = this.ok;
            this.commandData.username = this.commandParam.username;
			resolve();
        });
    }
}

/*       S.D.G.       */
