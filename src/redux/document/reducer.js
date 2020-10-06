export default function reducer(
    state = {
      document: [],
    },
    action,
  ) {
    switch (action.type) {
      case 'FETCH_DOCUMENT_SUCCESS': {
        return { ...state, document: action.payload };
      }
      case 'FETCH_DOCUMENT_FAILED': {
        return { ...state, document: action.payload };
      }
      case 'FETCH_DOCUMENT_DELETE':
      return {
        ...state,
        document: action.payload,
        // document.filter(item => item !== action.payload)
      };
      default: {
        return state;
      }
    }
  }
  