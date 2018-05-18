import AbstractWantedOfNewCardChangedCommand from "../../../gen/author/commands/AbstractWantedOfNewCardChangedCommand";

export default class WantedOfNewCardChangedCommand extends AbstractWantedOfNewCardChangedCommand {
    execute() {
        this.commandData.wanted = this.commandParam.wanted;
        this.commandData.given = this.commandParam.given;
        this.commandData.username = this.commandParam.username;
        this.commandData.password = this.commandParam.password;
        this.commandData.categoryId = this.commandParam.categoryId;
        this.commandData.naturalInputOrder = this.commandParam.naturalInputOrder;
        this.commandData.outcome = this.ok;
    }
}

/*       S.D.G.       */
