import stringify from "json-stable-stringify";
import * as App from "./App";
import CommonView from "../common/views/CommonView";

export default class ReplayUtils {

    static itemStringifyReplacer(key, value) {
        if (key === 'timestamp') {
            return undefined;
        } else {
            return value;
        }
    }

    static compareItems(expected, actual) {
        const expectedJson = stringify(expected, { space: '  ', replacer: ReplayUtils.itemStringifyReplacer});
        const actualJson = stringify(actual, { space: '  ', replacer: ReplayUtils.itemStringifyReplacer});
        return expectedJson === actualJson;
    }

    static prepareReplay() {
        localStorage.removeItem("username");
        localStorage.removeItem("password");
        window.location.hash = "#";
        App.container.setState({
            route: "login",
            data : undefined,
            username: undefined,
            password: undefined,
            role: undefined,
            errors: [],
            messages: []
        });
    }

    static tearDownReplay() {
        localStorage.removeItem("username");
        localStorage.removeItem("password");
        window.location.hash = "#";
        App.container.setState({
            route: "login",
            data : undefined,
            username: undefined,
            password: undefined,
            role: undefined,
            errors: [],
            messages: []
        });
    }

}

/*       S.D.G.       */

