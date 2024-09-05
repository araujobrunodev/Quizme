import { FC, useState } from "react"

interface BlockSideProps {
    numberOfQuestion: number,
    type: "makeQuiz" | "playQuiz"
}

const BlockSide:FC<BlockSideProps> = ({
    numberOfQuestion,
    type
}) => {
    const [options, setOptions] = useState<number[]>([])

    const createOptions = () => {
        return options.map((option) => {
            return (<div className="container_of_options">
                <input type="radio" name="options" className="input_radio" />
                {
                    type == "makeQuiz" ?
                    <input type="text" className="input_text" /> :
                    <p className="p_text">{/*value here*/}</p>
                }
            </div>)
        })
    }

    return (
        <div className="block_side">
            {`${numberOfQuestion}. `}
            {
                type == "makeQuiz" ?
                <input className="title_of_question" placeholder="Escreva aqui o titulo" type="text"/>
                :
                <p className="p_title_of_question">{/*value here*/}</p>
            }

            { createOptions() }

            {
                type == "makeQuiz" &&
                <button onClick={() => setOptions([...options, 0])}>
                    <img src="/add_circle.svg" alt="add circle.svg" />
                </button>
            }

            <textarea maxLength={100} readOnly={type == "playQuiz"} className="description" defaultValue={""} placeholder="Descreva a resposta aqui"></textarea>
        </div>
    )
}

export default BlockSide