import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"

export interface LogicState {
  score: number
  status: string
  playerPick: string
  housePick: string
}

const initialState: LogicState = {
  score: 0,
  status: "",
  playerPick: "",
  housePick: "",
}

export const logicSlice = createSlice({
  name: "logic",
  initialState,
  reducers: create => ({
    incrementScore: create.reducer(state => {
      state.score += 1
    }),
    decrementScore: create.reducer(state => {
      state.score -= 1
    }),
    ensureNonNegative: create.reducer(state => {
      if (state.score < 0) {
        state.score = 0
      }
    }),
    setStatus: create.reducer((state, action: PayloadAction<string>) => {
      state.status = action.payload
    }),
    setPlayerPick: create.reducer((state, action: PayloadAction<string>) => {
      state.playerPick = action.payload
    }),
    setHousePick: create.reducer((state, action: PayloadAction<string>) => {
      state.housePick = action.payload
    }),
  }),
  selectors: {
    selectScore: logic => logic.score,
    selectStatus: logic => logic.status,
    selectPlayerPick: logic => logic.playerPick,
    selectHousePick: logic => logic.housePick,
  },
})

export const {
  incrementScore,
  decrementScore,
  setStatus,
  setPlayerPick,
  setHousePick,
  ensureNonNegative,
} = logicSlice.actions
export const { selectScore, selectStatus, selectPlayerPick, selectHousePick } =
  logicSlice.selectors
