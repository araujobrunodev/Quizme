import "../styles/sideMain.css"
import { FC, useState } from "react"

interface SideMainProps {
    /** Making a quiz or playing the game*/
    type: "makeQuiz" | "playQuiz",
    /** title of project */
    title: string,
    /** Creator of quiz */
    makerQuiz: string,
    /** It was the type of quiz */
    target: string
}

const SideMain:FC<SideMainProps> = ({
    makerQuiz,
    target,
    title,
    type
}) => {
    let [titleOfProject, setTitleOfProject] = useState(title)

    return (
        <div className="side_main">
            <p className="title_side_main">{titleOfProject}</p>

            {
                type == "makeQuiz" ? 
                <>
                    <label className="label_side_main" htmlFor="project_name">Nome do Projeto: 
                        <input onChange={(e) => {setTitleOfProject(e.target.value)}} className="input_side_main" id="project_name" defaultValue={titleOfProject} type="text" />
                    </label>

                    <label className="label_side_main" htmlFor="Creator_name">Nome do Criador: 
                        <input className="input_side_main" id="Creator_name" readOnly type="text" defaultValue={makerQuiz} />
                    </label>

                    <label className="label_side_main" htmlFor="input_target">Assunto: 
                        <input className="input_side_main" id="input_target" type="text"  defaultValue={target}/>
                    </label>
                </> :
                <>
                    <p className="text_side_main">Criador: {titleOfProject}</p>

                    <p className="text_side_main">Assunto: {target}</p>
                </>
            }
        </div>
    )
}

export default SideMain