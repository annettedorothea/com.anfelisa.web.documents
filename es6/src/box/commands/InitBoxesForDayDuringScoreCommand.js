/* 
 * Copyright (c) 2019, Annette Pohl, Koblenz, Germany
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.

 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 */




import AbstractInitBoxesForDayDuringScoreCommand from "../../../gen/box/commands/AbstractInitBoxesForDayDuringScoreCommand";
import * as AppState from "../../../gen/ace/ReadAppState";
//please do not import "../../../gen/ace/WriteAppState" for you should not write the state in a command
import {getState} from "../../../gen/ace/ReadAppState";

export default class InitBoxesForDayDuringScoreCommand extends AbstractInitBoxesForDayDuringScoreCommand {

    initCommandData() {
    	return true;
    }

    handleResponse(resolve, reject) {
    	this.commandData.outcome = this.ok;
        const appState = getState();
        this.commandData.boxId = appState.data === undefined || appState.data.boxId === undefined ? undefined : appState.data.boxId;
    	resolve();
    }
    handleError(resolve, reject) {
    	reject(this.commandData.error);
    }
}




/******* S.D.G. *******/



