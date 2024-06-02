export default function Card({title, question, answer}) {
    
    

    return (
    
    <div className="card">
        <div id="cardTitle">
            {title}
        </div>
        <div id="cardQuestion">
            <h2>{question}</h2>
        </div>
        <div>
            <p>{answer}</p>
        </div>
    </div>

    )
}