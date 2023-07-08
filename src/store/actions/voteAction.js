import * as TYPES from "../action-types";
const delay = (interval = 1000)=>{
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve()
    },interval)
  })
}
const voteAction = {
  support(){
    return async (dispatch)=>{
      await delay();
      dispatch({
        type:TYPES.VOTE_SUP
      })
    }
  },
  async oppose() {
    await delay();
    return {
      type: TYPES.VOTE_OPP
    };
  }
}
export default voteAction;
