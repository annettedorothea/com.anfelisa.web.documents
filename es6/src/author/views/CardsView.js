import * as App from "../../app/App";

export default class CardsView {
	static render(eventData) {
        let data = App.container.state.data;
        if (!data) {
            data = {
                newCard: {
                    given: "",
                    wanted: "",
                    index: ""
                },
                editedCard: {
                    cardId: "",
                    given: "",
                    wanted: "",
                    index: ""
                },
                deleteCard: {
                    confirmDelete: false,
                    cardId: ""
                }
            };
        }
        App.container.setState({
            route: "card-list",
            data
        });
	};
	
	static givenOfNewCardChanged(eventData) {
        let data = App.container.state.data;
        data.newCard.given = eventData.given;
        App.container.setState({
            data
        });
	};
	
	static wantedOfNewCardChanged(eventData) {
        let data = App.container.state.data;
        data.newCard.wanted = eventData.wanted;
        App.container.setState({
            data
        });
	};
	
	static indexOfNewCardChanged(eventData) {
        let data = App.container.state.data;
        data.newCard.index = eventData.index;
        App.container.setState({
            data
        });
	};
	
	static resetNewValues(eventData) {
        let data = App.container.state.data;
        data.newCard = {
            wanted: "",
            given: "",
            index: ""
        };
        App.container.setState({
            data
        });
	};
	
	static givenOfEditedCardChanged(eventData) {
        let data = App.container.state.data;
        data.editedCard.given = eventData.given;
        App.container.setState({
            data
        });
	};
	
	static wantedOfEditedCardChanged(eventData) {
        let data = App.container.state.data;
        data.editedCard.wanted = eventData.wanted;
        App.container.setState({
            data
        });
	};
	
	static indexOfEditedCardChanged(eventData) {
        let data = App.container.state.data;
        data.editedCard.index = eventData.index;
        App.container.setState({
            data
        });
	};
	
	static resetEditValues(eventData) {
        let data = App.container.state.data;
        data.editedCard = {
            wanted: "",
            given: "",
            index: ""
        };
        App.container.setState({
            data
        });
	};
	
	static editCard(eventData) {
        let data = App.container.state.data;
        data.editedCard = {
            cardId: eventData.cardId,
            given: eventData.given,
            wanted: eventData.wanted,
            index: eventData.index
        };
        App.container.setState({
            data
        });
	};
	
	static displayConfirmDelete(eventData) {
        let data = App.container.state.data;
        data.deleteCard = {
            confirmDelete: true,
            cardId: eventData.cardId
        };
        App.container.setState({
            data
        });
	};
	
	static hideConfirmDelete(eventData) {
        let data = App.container.state.data;
        data.deleteCard = {
            confirmDelete: false,
            cardId: ""
        };
        App.container.setState({
            data
        });
	};
	
}

/*                    S.D.G.                    */
