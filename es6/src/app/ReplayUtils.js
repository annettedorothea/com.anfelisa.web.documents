import stringify from "json-stable-stringify";
import * as App from "./App";
import AppUtils from "./AppUtils";

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
        App.container.setState({
            route: "",
            data : {},
            username: undefined,
            password: undefined,
            role: undefined,
            language: undefined,
            toast: undefined,
            displaySpinner: false
        });
    }

    static tearDownReplay() {
        localStorage.removeItem("username");
        localStorage.removeItem("password");
        App.container.setState({
            route: "",
            data : {},
            username: undefined,
            password: undefined,
            role: undefined,
            language: undefined,
            toast: undefined,
            displaySpinner: false
        });
    }

}

/*       S.D.G.       */

