import React from 'react'

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
});

function total(selected) {
 return Object.keys(selected).reduce(
    (acc, curr) => acc + selected[curr].cost,
    0
  );
} 

export default class SummaryTotal extends React.Component {
    render() {
        return (
            <div className="summary__total">
                <div className="summary__total__label">Total</div>
                <div className="summary__total__value">
                    {USCurrencyFormat.format(total(this.props.selected))}
                </div>
            </div>
        )
    }
}
