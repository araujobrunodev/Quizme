import { createContext, useContext } from "react"

interface option {
    text: string,
    isRight: boolean,
    id: string
}

interface BlockSide {
    title: string,
    options: option[],
    description: string
}

export type blockSideType = BlockSide

interface BlockSideContext {
    blockSides: blockSideType[],
    setBlockSides: (newBlockSides: blockSideType[]) => void
}

const CreateBlockSides = createContext({} as BlockSideContext)
const useBlockSides = () => useContext(CreateBlockSides)

export {CreateBlockSides, useBlockSides}