export default function reducer(
  state = {
    event: [],
  },
  action,
) {
  switch (action.type) {
    case 'FETCH_EVENT_LIST_SUCCESS': {

      console.log("sukses");

      return { ...state, event: action.payload };
    }
    case 'FETCH_EVENT_LIST_FAILED': {
      return { ...state, event: action.payload };
    }
    default: {
      return state;
    }
  }
}
