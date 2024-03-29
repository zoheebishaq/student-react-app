import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import AddStudentComponent from "./components/AddStudentComponent";
// import FooterComponent from "./components/FooterComponent";
import HeaderComponent from "./components/HeaderComponent";
import ListStudentComponent from "./components/ListStudentComponent";

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
        <div className="container">
          <Switch>
            <Route exact path="/" component={ListStudentComponent}></Route>
            <Route path="/students" component={ListStudentComponent}></Route>
            <Route path="/add-student" component={AddStudentComponent}></Route>
            <Route path="/edit-student/:id" component={AddStudentComponent}></Route>
          </Switch>
        </div>
        
        {/* <FooterComponent /> */}
      </Router>
    </div>
  );
}

export default App;
