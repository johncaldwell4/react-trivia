import {useState} from "react";


function Card({title, question, answer}){

    const [flipped, setFlipped] = useState(false)

    function handleClick() {

        setFlipped(!flipped)

        console.log(flipped)
    }

    return (
            <div  onClick={
                ()=>{ handleClick()}
            }>
             {/*Card Front*/}
             {!flipped &&

                     <div

                         className='card'>


                        <div id="cardTitle">
                            <p>Question {title}</p>
                            
                        </div>

                        <div id="cardQuestion">
                            <h2>{question}</h2>
                            
                        </div>
                     </div>

             }

             {/*Card Back*/}
             {flipped &&
                 <div

                     className='card'>
                     <p id='card-answer'>{answer}</p>
                 </div>
             }

            </div>


    )

}
export default Card