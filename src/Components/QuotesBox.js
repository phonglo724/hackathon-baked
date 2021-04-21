import React from 'react'

export default function QuotesBox(props) {
    return (
        <div>
            
            <section className="text-section"> 
                <p>{props.randomQuote()}</p>
            </section>
            
        </div>
    )
}
