import * as App from "../../app/App";

export default class BoxListView {
	static render(eventData) {
	    const data = {
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
        };
        console.log("BoxListView.render data", data);
        App.container.setState({
            route: "dashboard",
            data
        });
	};
	
	static toggleMaxInterval() {
        let data = App.container.state.data;
        data.editedBox.maxIntervalChecked = !data.editedBox.maxIntervalChecked;
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
        data.deleteBox = {
            confirmDelete: true,
            boxId: eventData.boxId
        };
        App.container.setState({
            data
        });
	};

	static hideConfirmDelete(eventData) {
        let data = App.container.state.data;
        data.deleteBox = {
            confirmDelete: false,
            boxId: ""
        };
        App.container.setState({
            data
        });
	};

}

/*                    S.D.G.                    */
