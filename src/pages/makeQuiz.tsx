import { FC } from "react"
import SideMain from "../components/sideMain"
import BlockSide from "../components/blockSide"
import ToolCenter from "../components/toolCenter"
import { useBlockSides } from "../contexts/blockSideContext"

interface MakeQuizProps {
    type: "makeQuiz" | "playQuiz"
}

const MakeQuiz:FC<MakeQuizProps> = ({
    type
}) => {
    const blockSidesContext = useBlockSides()
    
    return (
        <div className="make_quiz" >
            <SideMain makerQuiz="" target="" title="" type={type}/>
            
            <div className="Container_of_blockSides">
            {
                blockSidesContext.blockSides.map((s,index) => {
                    return <BlockSide identification={index} key={index} type="makeQuiz"/>
                })
            }
            </div>

            <ToolCenter />
        </div>
    )
}

export default MakeQuiz