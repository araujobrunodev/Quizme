import { FC } from "react"

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
    return (
        <div className="side_main">
            <p className="title_side_main">{title}</p>

            {
                type == "makeQuiz" ? 
                <>
                    <label className="label_side_main" htmlFor="project_name">Nome do Projeto</label>
                    <input className="input_side_main" id="project_name" defaultValue={title} type="text" />

                    <label className="label_side_main" htmlFor="Creator_name">Nome do Criador</label>
                    <input className="input_side_main" id="Creator_name" type="text" defaultValue={makerQuiz} />

                    <label className="label_side_main" id="" htmlFor="">Assunto</label>
                    <input className="input_side_main" type="text"  defaultValue={target}/>
                </> :
                <>
                    <p className="text_side_main">Criador: {makerQuiz}</p>

                    <p className="text_side_main">Assunto: {target}</p>
                </>
            }
        </div>
    )
}

export default SideMain