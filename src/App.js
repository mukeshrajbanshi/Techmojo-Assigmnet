import './App.css';
import JsxElement from './components/JsxElement';
import ParentComponent from './components/ParentComponent';
import TypesOfFood from './components/TypesOfFood';

function App() {
  const JSX = (
    <div>
      <h1>Hello World</h1>
      <p>Lets render this to the Dom</p>
    </div>
  );
  return (
    <div>
      {JSX}
      <JsxElement />
      <ParentComponent />
      <TypesOfFood />
    </div>
   
  );
}

export default App;
