import { FC, useState } from "react"
import "../styles/blockSide.css"

interface BlockSideProps {
    type: "makeQuiz" | "playQuiz"
}

const BlockSide:FC<BlockSideProps> = ({
    type
}) => {
    const [options, setOptions] = useState<number[]>([])

    const AppearOptions = () => {
        return options.map((option) => {
            return (<div className="container_of_options" key={(Math.random() * (new Date()).getMilliseconds())}>
                <input type="radio" name="options" className="input_radio" />
                {
                    type == "makeQuiz" ?
                    <input type="text" className="input_text" /> :
                    <p className="p_text">{/*value here*/}</p>
                }
            </div>)
        })
    }

    const CreateOptions = () => {
        setOptions([...options, 0])
    }

    const removeOptions = () => {
        const newOptions:number[] = []

        options.forEach((option,index) => {
            if (index == options.length - 1) return;
            newOptions.push(option)
        })

        setOptions(newOptions)
    }

    return (
        <div className="block_side">
            {
                type == "makeQuiz" ?
                <input className="title_of_question" placeholder="Escreva aqui o titulo" type="text"/>
                :
                <p className="p_title_of_question">{/*value here*/}</p>
            }

            { AppearOptions() }

            {
                type == "makeQuiz" &&
                <div className="Container_button_blockSide">
                    <button className="button_blockSide" onClick={() => CreateOptions()}>
                        <img className="button_blockSide_img" src="/add_circle.svg" alt="add circle.svg" />
                    </button>

                    <button className="button_blockSide" onClick={() => removeOptions()}>
                        <img className="button_blockSide_img" src="/cancel.svg" alt="cancel.svg" />
                    </button>
                </div>
            }

            <textarea maxLength={900} readOnly={type == "playQuiz"} className="description" defaultValue={""} placeholder="Descreva a resposta aqui"></textarea>
        </div>
    )
}

export default BlockSide