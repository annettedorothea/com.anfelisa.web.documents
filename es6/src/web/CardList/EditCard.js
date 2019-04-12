import React from "react";
import Preview from "./Preview";
import FileInput from "./FileInput";
import {
    cancelEditCard,
    givenOfEditedCardChanged,
    loadWantedImageOfEditedCard,
    removeEditedCardImage,
    toggleScheduleCardSelection,
    updateCard,
    wantedOfEditedCardChanged
} from "../../../gen/card/ActionFunctions";
import {displayError} from "../../../gen/common/ActionFunctions";

export default class EditCard extends React.Component {

    constructor(props) {
        super(props);
        this.onUpdate = this.onUpdate.bind(this);
        this.onAltKeyUp = this.onAltKeyUp.bind(this);
        this.onWantedFileChange = this.onWantedFileChange.bind(this);
    }

    onWantedFileChange(event) {
        let files = event.target.files;

        if (files.length > 0) {
            const file = files[0];
            event.target.value = null;
            if (!file.type.match('image.*')) {
                displayError({errorKey: "noImageFile"});
                return;
            }
            if (file.size > 2000000) {
                displayError({errorKey: "fileTooBig"});
                return;
            }
            const reader = new FileReader();
            reader.onload = function (e) {
                loadWantedImageOfEditedCard(e.target.result);
            };
            reader.readAsDataURL(file);
        }
    }

    onAltKeyUp(e) {
        e.preventDefault();
        if (e.keyCode === 13 && e.altKey && this.isValid()) {
            this.onUpdate();
        }
    }

    onUpdate() {
        updateCard();
    }

    renderGiven() {
        return (
            <td className="input">
                <textarea
                    onChange={(event) => givenOfEditedCardChanged(event.target.value)}
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
            <td className="input">
                <textarea
                    onChange={(event) => wantedOfEditedCardChanged(event.target.value)}
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
                onRemoveImage={ () => removeEditedCardImage()}
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
            <tr className="notPrinted inputRow">
                <td>
                    <input
                        type={"checkbox"}
                        onChange={() => toggleScheduleCardSelection(this.props.cardId)}
                        checked={this.props.selectedCardIds.indexOf(this.props.cardId) >= 0}
                    />
                </td>
                {this.props.naturalInputOrder === true && this.renderGiven()}
                {this.props.naturalInputOrder === true && this.renderWanted()}
                {this.props.naturalInputOrder === true && this.renderImage()}
                {this.props.naturalInputOrder === false && this.renderWanted()}
                {this.props.naturalInputOrder === false && this.renderGiven()}
                {this.props.naturalInputOrder === false && this.renderImage()}
                <td className="noBreak input">
                    <button
                        disabled={!this.isValid()}
                        onClick={this.onUpdate}>
                        <i className="fas fa-check"/>
                    </button>
                    <button
                        onClick={() => cancelEditCard()}>
                        <i className="fas fa-times"/>
                    </button>
                </td>
                {this.props.hasBox === true && <td/>}
            </tr>
        );
    }
}
