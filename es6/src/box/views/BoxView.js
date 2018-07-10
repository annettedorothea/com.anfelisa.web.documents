import * as App from "../../app/App";
import AppUtils from "../../app/AppUtils";

export default class BoxView {
    static render(eventData) {
        let scheduleNext = false;
        if (App.container.state && App.container.state.data && App.container.state.data.scheduleNext) {
            scheduleNext = App.container.state.data.scheduleNext;
        }
        let data = AppUtils.deepCopy(eventData.data);
        data.index = 0;
        data.enableScoreButtons = false;
        data.displayImage = false;
        data.scheduleNext = scheduleNext;
        if (App.container.state && App.container.state.data && App.container.state.data.categoryName) {
            data.daysBehindSchedule = App.container.state.data.daysBehindSchedule;
            data.myCards = App.container.state.data.myCards;
            data.todaysCards = App.container.state.data.todaysCards;
            data.totalCards = App.container.state.data.totalCards;
            data.reinforceCards = App.container.state.data.reinforceCards;
            data.categoryName = App.container.state.data.categoryName;
        }
        App.container.setState({
            route: "card",
            data
        });
    };

    static renderStatistics(eventData) {
        let data = App.container.state.data;
        data.daysBehindSchedule = eventData.data.daysBehindSchedule;
        data.myCards = eventData.data.myCards;
        data.todaysCards = eventData.data.todaysCards;
        data.totalCards = eventData.data.totalCards;
        data.reinforceCards = eventData.data.reinforceCards;
        data.categoryName = eventData.data.categoryName;
        App.container.setState({
            data
        });
    };

    static displayNextItem(eventData) {
        let data = App.container.state.data;
        data.index = eventData.index;
        App.container.setState({
            data
        });
    };

    static displayImage(eventData) {
        let data = App.container.state.data;
        data.displayImage = true;
        App.container.setState({
            data
        });
    };

    static enableScoreButtons() {
        let data = App.container.state.data;
        data.enableScoreButtons = true;
        App.container.setState({
            data
        });
    };

    static toggleScheduleNext() {
        let data = App.container.state.data;
        data.scheduleNext = !data.scheduleNext;
        App.container.setState({
            data
        });
    };

}

/*                    S.D.G.                    */
