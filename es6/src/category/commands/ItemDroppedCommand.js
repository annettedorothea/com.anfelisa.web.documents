import AbstractItemDroppedCommand from "../../../gen/category/commands/AbstractItemDroppedCommand";

export default class ItemDroppedCommand extends AbstractItemDroppedCommand {
    execute() {
        if (this.commandData.movedCategory) {
            if (this.commandData.alt === false) {
                this.addMoveCategoryOutcome()
            } else {
                this.addChangeCategoryOrderOutcome()
            }
        } else {
            this.addCardOutcome();
        }
    }
}

/*       S.D.G.       */
