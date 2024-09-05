import { FC } from "react"
import SideMain from "../components/sideMain"
import BlockSide from "../components/blockSide"

interface MakeQuizProps {
    type: "makeQuiz" | "playQuiz"
}

const MakeQuiz:FC<MakeQuizProps> = ({
    type
}) => {
    return (
        <div className="make_quiz">
            <SideMain makerQuiz="" target="" title="" type={type}/>
            <BlockSide type="makeQuiz" numberOfQuestion={1}/>
        </div>
    )
}

export default MakeQuiz