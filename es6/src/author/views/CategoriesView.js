import * as App from "../../app/App";

export default class CategoriesView {
    static render(eventData) {
        App.container.setState({
            route: "category-list",
            data: eventData.data
        });
    };

}

/*                    S.D.G.                    */
