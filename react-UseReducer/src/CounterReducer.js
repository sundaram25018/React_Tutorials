const intialState = {count:0};

function CounterReducer(state,action){
  switch(action.type){
    case "increment":
     return {count:state.count+1}
     case "decrement":
      return {count:state.count-1}
      case "reset":
        return {count:0}
        case "incrementbyValue":
          return {count:state.count + action.payload}
          case "decrementbyValue":
            return {count:state.count-action.payload}
          default: return state;
  }
}
export {intialState, CounterReducer}