import { FC } from "react"
import SideMain from "../components/sideMain"

interface MakeQuizProps {
    type: "makeQuiz" | "playQuiz"
}

const MakeQuiz:FC<MakeQuizProps> = ({
    type
}) => {
    return (
        <div className="make_quiz">
            <SideMain makerQuiz="" target="" title="" type={type}/>
        </div>
    )
}

export default MakeQuiz