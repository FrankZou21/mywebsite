import React, {useState, useEffect, useReducer} from "react";
import "./styles/Home.css"

const backgroundImages = [
  "https://images.unsplash.com/photo-1492305175278-3b3afaa2f31f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjF9&w=1000&q=80",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRPmNwNKCbUAUgBgBnYIENUhRVIxVyBAr3vi635CDv1H2s5VWte"
]

function reducer(state, action) {
  switch (action.type) {
    case 'backgroundOne':
      return {background: backgroundImages[1]};
    case 'backgroundTwo':
      return {background: backgroundImages[0]};
    default:
      throw new Error();
  }
}

const initialState = {background: backgroundImages[0]};

export default function Home() {  

  const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
    const interval = setInterval(() => {
      if (state.background === backgroundImages[0]) {
        dispatch({type: 'backgroundOne'})
        console.log(state.background)
      } else if (state.background === backgroundImages[1]){
        dispatch({type: 'backgroundTwo'})
      }
    }, 3000);
    return () => {clearInterval(interval)}
  }, [state.background]);
  
  return (
    <div className = 'backgroundStyle' style={{backgroundImage: `url('${state.background}')`}}>
      <div className = 'textStyle'>
      <span>Hello, My name is Frank Zou</span><span>I am an aspiring Full-Stack Web Developer</span>
     </div>
    </div>
  );
}
