import React from "react";

export default class Dictionary extends React.Component {

    constructor(props) {
        super(props);
        this.releaseFocus = this.releaseFocus.bind(this);
    }

    releaseFocus() {
        const id = this.props.naturalInputOrder === true ? "wanted" : "given";
        document.getElementById(id).focus();
        console.log("releaseFocus", id);
    }

    render() {
        const languageMap = {
            "de": "deutsch",
            "fr": "franzoesisch",
            "en": "englisch"
        };
        const sourceLanguage = this.props.naturalInputOrder === true ? this.props.givenLanguage : this.props.wantedLanguage;
        const targetLanguage = this.props.naturalInputOrder === true ? this.props.wantedLanguage : this.props.givenLanguage;
        const value = this.props.value;

        const src = `https://www.linguee.de/${languageMap[sourceLanguage]}-${languageMap[targetLanguage]}/search?source=${languageMap[sourceLanguage]}&query=${value}`;
        return (
            <div className="dictionaryWrapper">
                <iframe src={src} frameBorder="0" onLoad={this.releaseFocus}/>
            </div>
        );
    }
}
