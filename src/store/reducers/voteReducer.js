import _ from "../../assets/utils"
import * as TYPES from "../action-types"
let initial = {
    supNum:10,
    oppNum:20,
    num:0
}
export default function voteReducer(state=initial,actions){
  state = _.clone(true,state)
  switch (actions.type){
    case TYPES.VOTE_SUP:
      state.supNum++
      break
    case TYPES.VOTE_OPP:
      state.oppNum++
      break;
    default:
  }
  return state;
};
