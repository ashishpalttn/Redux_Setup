import {TOGGLE_FLAG} from './constants'
export const toggleFlag = () => dispatch => {
  dispatch({
      type: TOGGLE_FLAG,
      data: "true",
  })
};
