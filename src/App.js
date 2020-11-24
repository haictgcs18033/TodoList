import logo from './logo.svg';
import './App.css';
import ReactLayout from './Components/ReactLayout';
import SideNav from './Components/SideNav';
import Main from './Components/Main';
import './css/stylemain.css';
import Footer from './Components/Footer';
function App() {
  return (
    <div className="App">
      <ReactLayout></ReactLayout>
      <SideNav></SideNav>
      <Main></Main>
      <Footer></Footer>
    </div>
  );
}

export default App;
