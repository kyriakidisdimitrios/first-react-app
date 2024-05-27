import {useState} from 'react';
import { CORE_CONCEPTS } from './data.js';
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';
import { EXAMPLES } from './data.js';
function App() {
  // const [selectedTopic, setSelectedTopic] = useState('components');
  const [selectedTopic, setSelectedTopic] = useState();
  //h useState einai h shmantikoterh entolh ths react gia ta hooks

  let tabContent = "Please click a button";

  if (selectedTopic) {
  tabContent = (
  <div id="tab-content">
    {/*if not true setSelectedTopic then select a topic, null otherwise*/}
    <h3>{EXAMPLES[selectedTopic].title}</h3>
    <p>{EXAMPLES[selectedTopic].description}</p>
    <pre>
              <code>
                {EXAMPLES[selectedTopic].code}
              </code>
            </pre>
  </div>);
}
  function handleSelect(selectedButton){
    // selectedButton => 'components', 'jsx'...
    setSelectedTopic(selectedButton);
    tabContent = selectedButton;
    console.log(tabContent);
  }
  console.log('app component rendering');
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptItem) => <CoreConcept key={conceptItem.title} {...conceptItem} />)}
            {/*it will be executed for every item in that array */}
            {/*<CoreConcept*/}
            {/*  title={CORE_CONCEPTS[0].title}*/}
            {/*  description={CORE_CONCEPTS[0].description}*/}
            {/*  image={CORE_CONCEPTS[0].image}*/}
            {/*/>*/}
            {/*<CoreConcept {...CORE_CONCEPTS[1]} />*/}
            {/*<CoreConcept {...CORE_CONCEPTS[2]} />*/}
            {/*<CoreConcept {...CORE_CONCEPTS[3]} />*/}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            {/*<TabButton onSelect={handleSelect}>Components</TabButton>*/}
            {/*<TabButton onSelect={handleSelect}>JSX</TabButton>*/}
            {/*<TabButton onSelect={handleSelect}>Props</TabButton>*/}
            {/*<TabButton onSelect={handleSelect}>State</TabButton>*/}
            <TabButton isSelected={selectedTopic === 'components'} onSelect={() => handleSelect('components')}>Components</TabButton>
            <TabButton isSelected={selectedTopic === 'jsx'} onSelect={() => handleSelect('jsx')}>JSX</TabButton>
            <TabButton isSelected={selectedTopic === 'props'} onSelect={() => handleSelect('props')}>props</TabButton>
            <TabButton  isSelected={selectedTopic === 'state'} onSelect={() => handleSelect('state')}>State</TabButton>
          </menu>
          {/*{!selectedTopic ? (<p>Please select a topic.</p>*/}
          {/*) : (*/}
          {/*    <div id="tab-content">*/}
          {/*      /!*if not true setSelectedTopic then select a topic, null otherwise*!/*/}
          {/*      <h3>{EXAMPLES[selectedTopic].title}</h3>*/}
          {/*      <p>{EXAMPLES[selectedTopic].description}</p>*/}
          {/*      <pre>*/}
          {/*    <code>*/}
          {/*      {EXAMPLES[selectedTopic].code}*/}
          {/*    </code>*/}
          {/*  </pre>*/}
          {/*    </div>)}*/}
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
