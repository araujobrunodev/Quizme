import { FC } from "react"
import "../styles/blockSide.css"
import { useBlockSides } from "../contexts/blockSideContext"

interface BlockSideProps {
    type: "makeQuiz" | "playQuiz",
    identification: number
}

interface BlockSideProperty {
    property: "title" | "options" | "description",
    state: "update" | "create" | "remove",
    value?: string | boolean,
    id?: string
    typeOption?: "text" | "isRight"
}

const BlockSide:FC<BlockSideProps> = ({
    type,
    identification
}) => {
    let info = useBlockSides()

    const AppearOptions = () => {
        return info.blockSides[identification].options.map((option) => {
            return (<div className="container_of_options" key={option.id}>
                <input checked={option.isRight} onChange={(event) => ChangeProperty({property: "options", state: "update", value: event.target.checked, id: option.id, typeOption: "isRight"})} type="radio" name={`options_${option.id}`} className="input_radio" />
                {
                    type == "makeQuiz" ?
                    <input defaultValue={option.text} onChange={(event) => ChangeProperty({property: "options", state: "update", value: event.target.value, id: option.id, typeOption: "text"})}  type="text" className="input_text" /> :
                    <p className="p_text">{option.text}</p>
                }
            </div>)
        })
    }

    const ChangeProperty = ({property, state, value, id, typeOption}:BlockSideProperty) => {
        const blockSides = info.blockSides.map((blockSide,index) => {
            if (index !== identification) return blockSide

            if (property == "options") {
                switch (state) {
                    case "create":
                        return {
                            ...blockSide,
                            options: [...blockSide.options, {
                                isRight: false,
                                text: "",
                                id: Math.random().toString()
                            }]
                        }
                        break;
                    case "update":
                        return {
                            ...blockSide,
                            options: blockSide.options.map((option) => {
                                if (option.id !== id) return {...option, isRight: false};
                                
                                if (typeOption === "text") {
                                    return {
                                        ...option,
                                        text: value as string
                                    }
                                } else if (typeOption === "isRight") {
                                    return {
                                        ...option,
                                        isRight: value as boolean
                                    }
                                }  else return option
                            })
                        }
                        break;
                    
                    case "remove":
                        return {
                            ...blockSide,
                            options: blockSide.options.slice(0,-1)
                        }
                        break;
                }
            } 
            
            if (property == "description" || property == "title") {
                if (state !== "update") return blockSide;
                
                return {
                    ...blockSide,
                    title: value as string
                } 
            } else if (property == "description") {
                if (state !== "update") return blockSide;
                
                return {
                    ...blockSide,
                    description: value as string
                }   
            }

            return blockSide
        })

        info.setBlockSides(blockSides)
    }

    return (
        <div className="block_side">
            {
                type == "makeQuiz" ?
                <input defaultValue={info.blockSides[identification].title} onChange={(event) => ChangeProperty({property: "title", state: "update", value: event.target.value})} className="title_of_question" placeholder="Escreva aqui o titulo" type="text"/>
                :
                <p className="p_title_of_question">{`${identification + 1}. ${info.blockSides[identification].title}`}</p>
            }

            { AppearOptions() }

            {
                type == "makeQuiz" &&
                <div className="Container_button_blockSide">
                    <button className="button_blockSide" onClick={() => ChangeProperty({property: "options", state: "create"})}>
                        <img className="button_blockSide_img" src="/add_circle.svg" alt="add circle.svg" />
                    </button>

                    <button className="button_blockSide" onClick={() => ChangeProperty({property: "options", state: "remove"})}>
                        <img className="button_blockSide_img" src="/cancel.svg" alt="cancel.svg" />
                    </button>
                </div>
            }

            <textarea defaultValue={info.blockSides[identification].description} maxLength={900} hidden={false} readOnly={type == "playQuiz"} onChange={(event) => ChangeProperty({property: "description", state: "update", value: event.target.value})} placeholder="Descreva a resposta aqui"></textarea>
        </div>
    )
}

export default BlockSide