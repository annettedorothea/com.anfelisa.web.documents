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




import AbstractHideSaveBugDialogCommand from "../../../gen/common/commands/AbstractHideSaveBugDialogCommand";
import * as AppState from "../../../gen/ace/ReadAppState";
//please do not import "../../../gen/ace/WriteAppState" for you should not write the state in a command

export default class HideSaveBugDialogCommand extends AbstractHideSaveBugDialogCommand {
    execute() {
        this.commandData.displaySaveBugDialog = false;
        this.commandData.messageKey = "thankYou";
    	this.commandData.outcome = this.ok;
    }
}




/******* S.D.G. *******/


