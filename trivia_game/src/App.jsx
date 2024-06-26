import { useState } from "react"
import './App.css'
import Header from './Header.jsx'
import Card from './Card.jsx'


const triviaQuestions = [
  {title: "1", question: "What is JSX?", answer: "JSX is a syntax extension for JavaScript, which looks similar to XML or HTML and is used with React to describe the UI." },
  {title: "2", question: "How do you create a React component?", answer: "A React component can be created as a function or a class. Functional components use a simple function, whereas class components extend from React.Component." },
  {title: "3", question: "What is a state in React?", answer: "State is a built-in object in React components used to store property values that belong to the component and can change over time." },
  {title: "4", question: "What are props in React?", answer: "Props (short for properties) are read-only attributes passed from a parent component to a child component to configure or customize the child component." },
  {title: "5", question: "What is the difference between state and props?", answer: "State is managed within the component and can change, while props are passed to the component from the parent and are read-only." },
  {title: "6", question: "What is a hook in React?", answer: "Hooks are special functions in React that allow you to use state and other React features in functional components." },
  {title: "7", question: "What is useState?", answer: "useState is a hook that allows you to add state to functional components in React." },
  {title: "8",question: "How do you use useEffect?", answer: "useEffect is a hook that lets you perform side effects in functional components, such as fetching data or directly manipulating the DOM." },
  {title: "9", question: "What is a key in React?", answer: "A key is a special string attribute you need to include when creating lists of elements in React to help identify which items have changed, are added, or removed." },
  {title: "10",question: "What is the virtual DOM?", answer: "The virtual DOM is an in-memory representation of the real DOM elements generated by React components before updating the real DOM." },
  {title: "11", question: "What is a higher-order component?", answer: "A higher-order component (HOC) is a function that takes a component and returns a new component, enhancing it with additional functionality." },
  {title: "12", question: "How do you handle events in React?", answer: "Events in React are handled using camelCase syntax and passing event handlers as props to elements." },
  {title: "13",question: "What is the purpose of React Router?", answer: "React Router is a library used to manage and handle navigation and routing in React applications." },
  {title: "14", question: "What is the Context API?", answer: "The Context API is a React structure that enables you to exchange unique details and helps in solving prop-drilling from all levels of your application." },
  {title: "15", question: "What is Redux?", answer: "Redux is a state management library for JavaScript apps, commonly used with React to manage the application state globally." },
  {title: "16", question: "How do you connect Redux with React?", answer: "You connect Redux with React using the `connect` function from `react-redux` and the `Provider` component to wrap your app." },
  {title: "17", question: "What is the use of refs in React?", answer: "Refs are used to access DOM elements or React elements created in the render method directly." },
  {title: "18", question: "What is React.memo?", answer: "React.memo is a higher-order component that prevents a functional component from re-rendering if its props have not changed." },
  {title: "19", question: "What is lazy loading in React?", answer: "Lazy loading in React is the technique of loading components only when they are needed, reducing the initial load time." },
  {title: "20", question: "What is the useCallback hook?", answer: "useCallback is a React hook that returns a memoized version of the callback function that only changes if one of the dependencies has changed." }
];

function App() {
  
  const [count, setCount] = useState(() => {
    console.log("Clicked") 
    return 0
  })

  function decrementCount(){
      
      if (count >= 1) {
        setCount(prevCount => prevCount - 1)
      } 
    
  }

  function incrementCount(){
    if (count <= 18) {
      setCount(prevCount => prevCount + 1)
    }
  }

  return(
    <>
      {/* Head react component */}
       <div className='main-nav'>
          <Header />
       </div>
      {/* End Head react component */}


      {/* Content and Card Components */}
      <div className='content'>

         <Card 

              key={triviaQuestions[count].title}

              title={triviaQuestions[count].title}
              question={triviaQuestions[count].question}
              answer={triviaQuestions[count].answer}

              />

      </div>
      {/* End Content and Card Components */}
      
      <div className='bottom'>
        <div className='footer'>
            <div className="previous-question">
              <button onClick={decrementCount}>Previous</button>
            </div> 
            <div className="next-question">
                  <button onClick={incrementCount}>Next</button>
              </div>
          </div>
        </div>
    </>
  )
    
}

export default App