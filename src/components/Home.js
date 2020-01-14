import React, {useEffect, useReducer} from "react";
import "./styles/Home.css"

const backgroundImages = [
  "https://images.pexels.com/photos/359989/pexels-photo-359989.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  "https://images.pexels.com/photos/2203416/pexels-photo-2203416.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  "https://images.pexels.com/photos/414645/pexels-photo-414645.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  "https://images.pexels.com/photos/583846/pexels-photo-583846.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
  "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  "https://images.pexels.com/photos/703012/pexels-photo-703012.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  "https://images.pexels.com/photos/4224/restaurant-person-people-hand.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  "https://images.pexels.com/photos/1444416/pexels-photo-1444416.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  "https://images.pexels.com/photos/269141/pexels-photo-269141.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
]

function reducer(state, action) {
  switch (action.type) {
    case 'backgroundOne':
      return {background: backgroundImages[1]};
    case 'backgroundTwo':
      return {background: backgroundImages[2]};
    case 'backgroundThree':
      return {background: backgroundImages[3]};
    case 'backgroundFour':
      return {background: backgroundImages[4]};
    case 'backgroundFive':
      return {background: backgroundImages[5]};
    case 'backgroundSix':
      return {background: backgroundImages[6]};
    case 'backgroundSeven':
      return {background: backgroundImages[7]};
    case 'backgroundEight':
      return {background: backgroundImages[8]};
    case 'backgroundNine':
      return {background: backgroundImages[9]};
    case 'backgroundTen':
      return {background: backgroundImages[0]};
    default:
      throw new Error();
  }
}

const initialState = {background: backgroundImages[0]};

export default function Home({scrollToAbout}) {  

  const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
    const interval = setInterval(() => {
      if (state.background === backgroundImages[0]) {
        dispatch({type: 'backgroundOne'})
      } else if (state.background === backgroundImages[1]){
        dispatch({type: 'backgroundTwo'})
      } else if (state.background === backgroundImages[2]){
        dispatch({type: 'backgroundThree'})
      } else if (state.background === backgroundImages[3]){
        dispatch({type: 'backgroundFour'})
      } else if (state.background === backgroundImages[4]){
        dispatch({type: 'backgroundFive'})
      } else if (state.background === backgroundImages[5]){
        dispatch({type: 'backgroundSix'})
      } else if (state.background === backgroundImages[6]){
        dispatch({type: 'backgroundSeven'})
      } else if (state.background === backgroundImages[7]){
        dispatch({type: 'backgroundEight'})
      } else if (state.background === backgroundImages[8]){
        dispatch({type: 'backgroundNine'})
      } else if (state.background === backgroundImages[9]){
        dispatch({type: 'backgroundTen'})
      }
    }, 5000);
    return () => {clearInterval(interval)}
  }, [state.background]);
  
  return (
    <div className = 'backgroundStyle' style={{backgroundImage: `url('${state.background}')`}}>
      <div className = 'textStyle'>
        <span>Hello, My name is Frank Zou</span>
        <span>I am an aspiring Full-Stack Web Developer</span>
        <div onClick={scrollToAbout} className="homeButton">Find Out More</div>
     </div>
    </div>
  );
}
