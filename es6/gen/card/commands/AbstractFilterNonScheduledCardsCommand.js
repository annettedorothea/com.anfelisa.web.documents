/* 
 * Copyright (c) 2020, Annette Pohl, Koblenz, Germany
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
 *
 * generated with de.acegen 0.9.8
 *
 */




import Command from "../../../gen/ace/SynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import * as AppState from "../../ace/AppState";
import FilterNonScheduledCardsOkEvent from "../../../gen/card/events/FilterNonScheduledCardsOkEvent";

export default class AbstractFilterNonScheduledCardsCommand extends Command {
    constructor(commandData) {
        super(commandData, "card.FilterNonScheduledCardsCommand");
        this.ok = "ok";
        this.commandData.filterNonScheduled = AppState.get_authorView_cardView_filterNonScheduled();
    }

    publishEvents() {
		switch (this.commandData.outcome) {
		case this.ok:
			new FilterNonScheduledCardsOkEvent(this.commandData).publish();
			break;
		default:
			throw 'FilterNonScheduledCardsCommand unhandled outcome: ' + this.commandData.outcome;
		}
    }
}




/******* S.D.G. *******/



