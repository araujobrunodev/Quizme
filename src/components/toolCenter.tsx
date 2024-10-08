import { FC } from "react"
import { blockSideType, useBlockSides } from "../contexts/blockSideContext"
import "../styles/toolCenter.css"

interface ToolCenterProps {
    type: "makeQuiz" | "playQuiz"
}

const ToolCenter:FC<ToolCenterProps> = ({
    type
}) => {
    const buttonNames = ["Criar", "Finalizar","Remover"]
    const blockSides = useBlockSides()

    const MakeABlockSide = () => {
        blockSides.setBlockSides([
            ...blockSides.blockSides,
            {
                title: "",
                options: [],
                description: ""
            }
        ])
    }

    const FinishProject = () => {
        console.log("finish project")
    }

    const RemoveABlockSide = () => {
        const newBlockSides:blockSideType[] = blockSides.blockSides.slice(0,-1)

        blockSides.setBlockSides(newBlockSides)
    }

    const eventByEachButton = [
        MakeABlockSide,
        FinishProject,
        RemoveABlockSide
    ]

    return (
        <div className="toolCenter">
            {
                buttonNames.map((name,index) => {
                    return (
                        <button 
                        onClick={eventByEachButton[index]} 
                        key={index} 
                        hidden={
                            name !== "Finalizar" &&
                            type === "playQuiz"
                        }
                        className={"button_toolCenter "+name}>
                            {name}
                        </button>
                    )
                })
            }
        </div>
    )
}

export default ToolCenter