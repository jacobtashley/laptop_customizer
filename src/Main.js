import React from 'react'
import MainForm from './MainForm'
import MainSummary from './MainSummary'

export default class Main extends React.Component {
    render() {
        return (
            <div>
                <MainForm 
                    features={this.props.features}
                    updateFeature={this.props.updateFeature} 
                    selected={this.props.selected}
                />
                <MainSummary selected = {this.props.selected}/>
            </div>
        )
    }
}

