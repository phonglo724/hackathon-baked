import React from 'react'

export default function QuotesBox(props) {
    return (
        <div>
            <p>{props.randomQuote()}</p>
        </div>
    )
}
