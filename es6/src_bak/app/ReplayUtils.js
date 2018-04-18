import stringify from "json-stable-stringify";

export default class ReplayUtils {

    static itemStringifyReplacer(key, value) {
        if (key === 'timestamp') {
            return undefined;
        } else {
            return value;
        }
    }

    static compareItems(expected, actual) {
        console.log("expected", expected);
        console.log("actual", actual);
        const expectedJson = stringify(expected, {space: '  ', replacer: ReplayUtils.itemStringifyReplacer});
        const actualJson = stringify(actual, {space: '  ', replacer: ReplayUtils.itemStringifyReplacer});
        return ReplayUtils.areNamesEqual(expected, actual) &&
            ReplayUtils.areParamsEqual(expected, actual) &&
            ReplayUtils.isDataEqual(expected.actual);
    }

    static itemName(item) {
        if (item.action) {
            return item.action.actionName;
        } else if (item.command) {
            return item.command.commandName;
        } else if (item.event) {
            return item.event.eventName;
        }
    }

    static areNamesEqual(expected, actual) {
        return ReplayUtils.itemName(expected) === this.itemName(actual);
    }

    static itemParam(item) {
        if (item === undefined) {
            return "";
        }
        if (item.action) {
            return stringify(item.action.actionParam, {space: '  '});
        }
        if (item.command) {
            return stringify(item.command.commandParam, {space: '  '});
        }
        if (item.event) {
            return stringify(item.event.eventParam, {space: '  '});
        }
        return "";
    }

    static areParamsEqual(expected, actual) {
        return ReplayUtils.itemParam(expected) === this.itemParam(actual);
    }

    static itemData(item) {
        if (item === undefined) {
            return "";
        }
        if (item.action) {
            return stringify(item.action.actionData, {space: '  '});
        }
        if (item.command) {
            return stringify(item.command.commandData, {space: '  '});
        }
        if (item.event) {
            return stringify(item.event.eventData, {space: '  '});
        }

        return "";
    }

    static isDataEqual(expected, actual) {
        return ReplayUtils.itemData(expected) === this.itemParam(actual);
    }

}

/*       S.D.G.       */

