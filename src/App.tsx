import './index.css';
import { useReducer } from 'react';

type reducerState = {
  count: number;
}
type reducerAction = {
  type: string;
}

const initialState ={ count: 0};
const reducer = (state:reducerState , action:reducerAction ) => {
  switch (action.type){
    case 'ADD':
        return{...state, count: state.count + 1};
    break;
    case 'DEL':
      if( state.count > 0) {
        return{...state, count: state.count -1};
      }
    break;
    case 'RESET':
        return initialState;
    break;
  }
  return state;
};


const App = () => {

  const [state, dispatch] = useReducer(reducer, initialState);


  return (
    <>
      <div className="p-5">
        <h1>Contagem: {state.count}</h1>
        <hr className='m-1' />
        <button className="p-3 m-3" onClick={()=>{dispatch({type: 'ADD'})}} >Adicionar </button>
        <button className="p-3 m-3" onClick={()=>{dispatch({type: 'DEL'})}} >Remover </button>
        <button className="p-3 m-3" onClick={()=>{dispatch({type: 'RESET'})}} >Reset</button>
      </div>
    </>
  )
}

export default App;
