import AbstractUpdateCardCommand from "../../../gen/card/commands/AbstractUpdateCardCommand";

export default class UpdateCardCommand extends AbstractUpdateCardCommand {

    initCommandData() {
        const data = {
            username: this.props.username,
            password: this.props.password,
            cardId: this.props.cardId,
            given: this.props.given.trim(),
            wanted: this.props.wanted.trim(),
            image: this.props.image,
            parentCategoryId: this.props.categoryId
        };
    	//add from appState to commandData
    }

    handleResponse(resolve, reject) {
    	this.commandData.outcome = this.ok;
    	resolve();
    }
    handleError(resolve, reject) {
    	reject(this.commandData.error);
    }
}

/*       S.D.G.       */
