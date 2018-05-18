import AbstractGivenOfNewCardChangedCommand from "../../../gen/author/commands/AbstractGivenOfNewCardChangedCommand";

export default class GivenOfNewCardChangedCommand extends AbstractGivenOfNewCardChangedCommand {
    execute() {
        this.commandData.given = this.commandParam.given;
        this.commandData.wanted = this.commandParam.wanted;
        this.commandData.username = this.commandParam.username;
        this.commandData.password = this.commandParam.password;
        this.commandData.categoryId = this.commandParam.categoryId;
        this.commandData.naturalInputOrder = this.commandParam.naturalInputOrder;
        this.commandData.outcome = this.ok;
    }
}

/*       S.D.G.       */
