import { Dispatch, SetStateAction, createContext } from "react";
import { ICategory } from "../modeles/dataTDO";

export type ContextState = {
    data: ICategory[];
    category: Partial<ICategory>;
    changeCategory: Dispatch<SetStateAction<Partial<ICategory>>>;
}

export const CategoryContext = createContext<Partial<ContextState>>({});
CategoryContext.displayName = 'Category';
