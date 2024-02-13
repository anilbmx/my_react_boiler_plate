const SAMPLE_REQUEST = "SAMPLE_REQUEST";

export function resetRetryRequestReducer() {
  return async (dispatch) => {
    dispatch({
      type: SAMPLE_REQUEST
    });
  };
}