export default function reducer(
    state = {
      event: [],
    },
    action,
  ) {
    switch (action.type) {
      case 'EMPLOYEE_SUCCESS': {
  
        console.log("sukses");
  
        return { ...state, event: action.payload };
      }
      case 'EMPLOYEE_ERROR': {
        return { ...state, event: action.payload };
      }
      default: {
        return state;
      }
    }
  }
  