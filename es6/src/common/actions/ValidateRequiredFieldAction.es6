'use strict';

class ValidateRequiredFieldAction extends AbstractValidateRequiredFieldAction {

    captureActionParam() {
		this.actionParam.value = $("#" + this.actionParam.id).val();
    }

    initActionData() {
		this.actionData.id = this.actionParam.id;
		this.actionData.value = this.actionParam.value;
    }

    releaseActionParam() {
		$("#" + this.actionParam.id + "").val(this.actionParam.value);
    }
}

/*       S.D.G.       */
