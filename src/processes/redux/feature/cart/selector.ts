// @ts-ignore
import {WritableDraft} from "immer/src/types/types-external";

const selectCartModule = (state: WritableDraft<{}>) => state.cart

export const selectProductAmount = (state: WritableDraft<{}>, id: any) => selectCartModule(state)[id] | 0