import React from 'react'

export default class Feature extends React.Component {
    render() {
        return (
            <fieldset className="feature" key={featureHash}>
                <legend className="feature__name">
                    <h3>{feature}</h3>
                </legend>
                {options}
            </fieldset>
        )
    }
}