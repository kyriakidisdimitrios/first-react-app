
import Header from './components/Header/Header.jsx';
import CoreConcepts from "./components/CoreConcepts.jsx";
import Examples from "./components/Examples.jsx";
function App() {

  return (
      // React.createElement(Header);
    <div>
      {/*ean diagrapsw to anw div 8a exw error giati 8a prepei na exoun parent element*/}
      <Header />
      <main>
        {/*edw erisagoume ta CoreConcepts*/}
        <CoreConcepts/>
        <Examples/>
      </main>
    </div>
  );
}

export default App;
