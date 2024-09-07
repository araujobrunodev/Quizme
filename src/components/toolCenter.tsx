import "../styles/toolCenter.css"

const ToolCenter = () => {
    const buttonNames = ["Criar", "Finalizar","Remover"]

    const MakeABlockSide = () => {
        console.log("make a blockSide")
    }

    const FinishProject = () => {
        console.log("finish project")
    }

    const RemoveABlockSide = () => {
        console.log("remove a blockSide")
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