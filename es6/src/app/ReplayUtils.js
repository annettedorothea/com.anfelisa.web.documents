export default class ReplayUtils {

    static itemStringifyReplacer(key, value) {
        if (key === 'timestamp') {
            return undefined;
        } else {
            return value;
        }
    }

    static compareItems(expected, actual) {
    	// will return false if just the order of props is different
    	// for a better result use https://www.npmjs.com/package/json-stable-stringify
        return JSON.stringify(expected, ReplayUtils.itemStringifyReplacer) === JSON.stringify(actual, ReplayUtils.itemStringifyReplacer);
    }

}

/*       S.D.G.       */

