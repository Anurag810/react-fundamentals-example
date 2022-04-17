// This are basic fundamental concepts implementation for React

import { Component } from 'react'; 
import './App.css';
import Greet from './components/Greet'; //Basic Props
import Bye from './components/Bye';
import Hello from './components/Hello'; //component without jsx
import Message from './components/Message'; //State
import Counter from './components/Counter'; //setState
import FunctionClick from './components/FunctionClick';//Event handling
import ClassClick from './components/ClassClick';//Event handling
import EventBind from './components/EventBind'; //Event Binding
import ParentComponent from './components/ParentComponent'; // method as props
import UserGreeting from './components/UserGreeting'; //conditional Rendering
import NameList from './components/NameList';//  List Rendering
import Stylesheet  from './components/Stylesheet'; //Styling in react.
import Inline  from './components/Inline'; // inline styling
import './appStyles.css'  //Stylesheet
import styles from './appStyles.module.css' // css Modules
import Form from './components/Form'; // Form Handling
import LifecycleA from './components/LifecycleA'; // component mounting lifecycle
import Fragment from './components/Fragment'; // Fragments
import Table from './components/Table'; //Frgments
// import PureComp from './components/PureComp'; //pure Comp
import ParentComp from './components/ParentComp'; //pure Comp
import RefsDemo from './components/RefsDemo';// Using ref
import FocusInput from './components/FocusInput'; // ref with Class
import FrParentInput from './components/FrParentInput'; //forwarding ref
import PortalDemo from './components/PortalDemo'; //portal
import Hero from './components/Hero'; //Error Boundary
import ErrorBoundary from './components/ErrorBoundary'; //Error Boundary
import ClickCounter from './components/ClickCounter'; //implementing Higher Order Component
import HoverCounter from './components/HoverCounter'; //implementing Higher Order Component
import ClickCountertwo from './components/ClickCountertwo'; //Render Props implemenmtation
import User from './components/User'; //Render Props implemenmtation
import CounterTwo from './components/CounterTwo'; //Render Props implemenmtation
import ComponentA from './components/ComponentA'; // Context
import { UserProvider } from './components/userContext'; // Context
import PostList from './components/PostList'; //HTTP Get Request
import PostForm from './components/PostForm'; //HTTP Post Request


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>React Fundamentals Example</h1>
        <p>
          This was created while learning React basics and fundamental.
          Each and every concepts for Beginner is implemented here.
          Check App.js.
        </p>
        {/* <PostForm></PostForm> */}
        {/* <PostList/> */}


        {/* <UserProvider value='John Doe'>
          <ComponentA></ComponentA>
        </UserProvider> */}
        
        {/* <CounterTwo 
          render={(count, incrementCount) => (
            <ClickCountertwo count={count} incrementCount={incrementCount}/>
          )}
        /> */}
        {/* <User render={(isLoggedIn) => isLoggedIn ? "Vishwass":"Guest"}/> */}


        {/* <ClickCounter name="Anurag"/>
        <HoverCounter/>  */}


        {/* <ErrorBoundary>
          <Hero heroName="Batman"/>
        </ErrorBoundary>
        <ErrorBoundary>
          <Hero heroName="Joker"/>
        </ErrorBoundary>


        {/* <PortalDemo/> */}
        

        {/* <FrParentInput/> */}
        {/* <FocusInput/> */}
        {/* <RefsDemo/> */}


        {/* <ParentComp/> */}


        {/* <Table/> */}
        {/* <Fragment/> */}

        {/* <LifecycleA> </LifecycleA> */}

        {/* <Form></Form> */}

        {/* <h1 className='error'>Error</h1>
        <h1 className={styles.success}>Success</h1> */}
        {/* <Inline></Inline> */}
        {/* <Stylesheet></Stylesheet> */}

        
        {/* <NameList></NameList> */}
        {/* <UserGreeting></UserGreeting> */}
        {/* <ParentComponent></ParentComponent> */}
        {/* <EventBind></EventBind> */}
        {/* <FunctionClick></FunctionClick>
        <ClassClick></ClassClick> */}
        {/* <Message/>
        <Greet name="Bruce"><p>This is child</p></Greet>
        <Greet name="clark"><button>Action</button></Greet>
        <Bye name="Bruce"/>
        <Hello/> 
        <Counter/> */}
      </div>
    );
  }
}

export default App;
