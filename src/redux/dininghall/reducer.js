export default function reducer(
    state = {
      dininghall: [],
    },
    action,
  ) {
    switch (action.type) {
      case 'FETCH_DININGHALL_SUCCESS': {
  
        console.log("sukses");
        return { ...state, dininghall: action.payload };
      }
      case 'FETCH_DININGHALL_FAILED': {
        return { ...state, dininghall: action.payload };
      }
      default: {
        return state;
      }
    }
  }
  