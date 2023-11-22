// import Login from "./components/Login"
import NewList from "./components/NewList";
import styled from "styled-components"
import TodoLists from "./components/TodoLists";

const MainContainer = styled.div`
background: url("./public/blackboard.jpg");
background-size: contain;
height: 400px;
width: 600px;
border-radius: 20px;
box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
display: flex; 
justify-content: center;
`;

function App() {


  return (
    <>
      <MainContainer>
        {/* <Login /> */}
        <NewList/>
        <TodoLists/>
      </MainContainer>
    </>
  )
}

export default App
