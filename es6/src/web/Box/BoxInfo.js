import React from 'react';

export default class BoxInfo extends React.Component {

    render() {
        return (
            <div>

                <table>
                    <tbody>
                    {this.props.maxInterval > 1 &&
                    <tr>
                        <td>{this.props.texts.box.maxInterval[this.props.language]}</td>
                        <td>{this.props.texts.box.maxIntervalMore[this.props.language].replace("{0}", this.props.maxInterval)}</td>
                    </tr>}
                    {this.props.maxInterval === 1 &&
                    <tr>
                        <td>{this.props.texts.box.maxInterval[this.props.language]}</td>
                        <td>{this.props.texts.box.maxIntervalOne[this.props.language]}</td>
                    </tr>}
                    <tr>
                        <td>{this.props.texts.box.todaysCards[this.props.language]}</td>
                        <td>{this.props.todaysCards}</td>
                    </tr>
                    <tr>
                        <td>{this.props.texts.box.reinforceCards[this.props.language]}</td>
                        <td>{this.props.reinforceCards}</td>
                    </tr>
                    <tr>
                        <td>{this.props.texts.box.myCards[this.props.language]}</td>
                        <td>{this.props.myCards}</td>
                    </tr>
                    <tr>
                        <td>{this.props.texts.box.totalCards[this.props.language]}</td>
                        <td>{this.props.totalCards}</td>
                    </tr>
                    {this.props.daysBehindSchedule !== undefined && this.props.daysBehindSchedule > 0 && <tr>
                        <td colSpan={2}>{this.props.daysBehindSchedule === 1 ?
                            this.props.texts.box.daysBehindScheduleMessageOne[this.props.language] :
                            this.props.texts.box.daysBehindScheduleMessage[this.props.language].replace("{0}", this.props.daysBehindSchedule)}</td>
                    </tr>}
                    </tbody>
                </table>

            </div>
        );
    }
}

