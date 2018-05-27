import * as App from "../../app/App";

export default class BoxListView {
	static render(eventData) {
        App.container.setState({
            route: "dashboard",
            data : {
            	boxList: eventData.data.boxList,
				editedBox: {
            	    boxId: "",
                    maxIntervalChecked: false,
                    maxInterval: ""
                },
				deleteBox: {
                    confirmDelete: false,
                    boxId: ""
				}
			}
        });
	};
	
	static toggleMaxInterval(eventData) {
        let data = App.container.state.data;
        data.editedBox.maxIntervalChecked = !data.maxIntervalChecked;
        data.editedBox.maxInterval = "";
        App.container.setState({
            data
        });
	};
	
	static maxIntervalChanged(eventData) {
        let data = App.container.state.data;
        data.editedBox.maxInterval = eventData.maxInterval;
        App.container.setState({
            data
        });
	};
	
	static editBox(eventData) {
        let data = App.container.state.data;
        data.editedBox.boxId = eventData.boxId;
        data.editedBox.maxIntervalChecked = eventData.maxIntervalChecked;
        data.editedBox.maxInterval = eventData.maxInterval;
        console.log("editBox", data);
        App.container.setState({
            data
        });
	};

	static cancelEditBox(eventData) {
        let data = App.container.state.data;
        data.editedBox.boxId = "";
        App.container.setState({
            data
        });
	};

	static displayConfirmDelete(eventData) {
        let data = App.container.state.data;
        data.deleteCard = {
            confirmDelete: true,
            boxId: eventData.boxId
        };
        App.container.setState({
            data
        });
	};

	static hideConfirmDelete(eventData) {
        let data = App.container.state.data;
        data.deleteCard = {
            confirmDelete: false,
            boxId: ""
        };
        App.container.setState({
            data
        });
	};

}

/*                    S.D.G.                    */
