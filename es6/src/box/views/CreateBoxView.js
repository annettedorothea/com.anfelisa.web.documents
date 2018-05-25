import * as App from "../../app/App";

export default class CreateBoxView {
    static render(eventData) {
        App.container.setState({
            route: "create-box",
            data : {
                categoryList: eventData.data.categoryList,
                selectedCategoryId: "",
                maxIntervalChecked: false,
                maxInterval: ""
            }

        });
    };
    static toggleMaxInterval() {
        let data = App.container.state.data;
        data.maxIntervalChecked = !data.maxIntervalChecked;
        data.maxInterval = "";
        App.container.setState({
            data
        });
    }
    static maxIntervalChanged(eventData) {
        let data = App.container.state.data;
        data.maxInterval = eventData.maxInterval;
        App.container.setState({
            data
        });
    }
    static categorySelected(eventData) {
        let data = App.container.state.data;
        data.selectedCategoryId = eventData.selectedCategoryId;
        App.container.setState({
            data
        });
    }
}

/*                    S.D.G.                    */
