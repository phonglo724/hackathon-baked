import React from 'react'

export default function QuotesBox(props) {
    return (
        <div>
            <section className="text-section"> 
                <h2>Title?</h2>
                <p>{props.randomQuote()}</p>
            </section>
            
        </div>
    )
}
