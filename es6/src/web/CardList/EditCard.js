import UpdateCardAction from "../../author/actions/UpdateCardAction";
import React from "react";
import CancelEditCardAction from "../../author/actions/CancelEditCardAction";
import WantedOfEditedCardChangedAction from "../../author/actions/WantedOfEditedCardChangedAction";
import GivenOfEditedCardChangedAction from "../../author/actions/GivenOfEditedCardChangedAction";
import RemoveEditedCardImageAction from "../../author/actions/RemoveEditedCardImageAction";
import DisplayErrorAction from "../../common/actions/DisplayErrorAction";
import LoadWantedImageOfEditedCardAction from "../../author/actions/LoadWantedImageOfEditedCardAction";
import ToggleScheduleCardSelectionAction from "../../author/actions/ToggleScheduleCardSelectionAction";
import Preview from "./Preview";
import FileInput from "./FileInput";

export default class EditCard extends React.Component {

    constructor(props) {
        super(props);
        this.onGivenChange = this.onGivenChange.bind(this);
        this.onWantedChange = this.onWantedChange.bind(this);
        this.onUpdate = this.onUpdate.bind(this);
        this.onCancel = this.onCancel.bind(this);
        this.onAltKeyUp = this.onAltKeyUp.bind(this);
        this.onRemoveImage = this.onRemoveImage.bind(this);
        this.onWantedFileChange = this.onWantedFileChange.bind(this);
        this.toggleScheduleCardSelection = this.toggleScheduleCardSelection.bind(this);
    }

    toggleScheduleCardSelection(cardId) {
        new ToggleScheduleCardSelectionAction({cardId}).apply();
    }

    onGivenChange(event) {
        const given = event.target.value;
        new GivenOfEditedCardChangedAction({given}).apply();
    }

    onWantedChange(event) {
        const wanted = event.target.value;
        new WantedOfEditedCardChangedAction({wanted}).apply();
    }

    onWantedFileChange(event) {
        let files = event.target.files;

        if (files.length > 0) {
            const file = files[0];
            event.target.value = null;
            if (!file.type.match('image.*')) {
                new DisplayErrorAction({error: {errorKey: "noImageFile"}}).apply();
                return;
            }
            if (file.size > 2000000) {
                new DisplayErrorAction({error: {errorKey: "fileTooBig"}}).apply();
                return;
            }
            const reader = new FileReader();
            reader.onload = function (e) {
                new LoadWantedImageOfEditedCardAction({
                    image: e.target.result
                }).apply();
            };
            reader.readAsDataURL(file);
        }
    }

    onCancel() {
        new CancelEditCardAction().apply();
    }

    onAltKeyUp(e) {
        e.preventDefault();
        if (e.keyCode === 13 && e.altKey && this.isValid()) {
            this.onUpdate();
        }
    }

    onUpdate() {
        const data = {
            username: this.props.username,
            password: this.props.password,
            cardId: this.props.cardId,
            given: this.props.given,
            wanted: this.props.wanted,
            image: this.props.image,
            parentCategoryId: this.props.categoryId
        };
        new UpdateCardAction(data).apply();
    }

    onRemoveImage() {
        new RemoveEditedCardImageAction().apply();
    }

    renderGiven() {
        return (
            <td>
                <textarea
                    rows="4"
                    onChange={this.onGivenChange}
                    autoComplete="off"
                    value={this.props.given}
                    placeholder={this.props.texts.cardList.given[this.props.language]}
                    onKeyUp={this.onAltKeyUp}
                />
            </td>
        );
    }

    renderWanted() {
        return (
            <td>
                <textarea
                    rows="4"
                    onChange={this.onWantedChange}
                    autoComplete="off"
                    value={this.props.wanted}
                    placeholder={this.props.texts.cardList.wanted[this.props.language]}
                    onKeyUp={this.onAltKeyUp}
                />
            </td>
        );
    }

    renderImage() {
        if (this.props.image.length > 0) {
            return <Preview
                image={this.props.image}
                onRemoveImage={this.onRemoveImage}
            />
        }
        return (
            <FileInput
                onWantedFileChange={this.onWantedFileChange}
                file={this.props.file}
                texts={this.props.texts}
                language={this.props.language}
            />
        )
    }

    isValid() {
        return this.props.given.length > 0 && (this.props.wanted.length > 0 || this.props.image.length > 0);
    }

    render() {
        return (
            <tr>
                {this.props.hasBox === true &&
                <td>
                    <input
                        type={"checkbox"}
                        onChange={() => this.toggleScheduleCardSelection(this.props.cardId)}
                        checked={this.props.scheduleCardSelection.indexOf(this.props.cardId) >= 0}
                    />
                </td>
                }
                {this.props.hasBox === false && this.props.editable === true && <td/>}
                {this.props.naturalInputOrder === true && this.renderGiven()}
                {this.props.naturalInputOrder === true && this.renderWanted()}
                {this.props.naturalInputOrder === true && this.renderImage()}
                {this.props.naturalInputOrder === false && this.renderWanted()}
                {this.props.naturalInputOrder === false && this.renderImage()}
                {this.props.naturalInputOrder === false && this.renderGiven()}
                <td/>
                <td className="noBreak">
                    <button
                        disabled={!this.isValid()}
                        onClick={this.onUpdate}>
                        <i className="fas fa-check"/>
                    </button>
                    <button
                        onClick={this.onCancel}>
                        <i className="fas fa-times"/>
                    </button>
                </td>
            </tr>
        );
    }
}
