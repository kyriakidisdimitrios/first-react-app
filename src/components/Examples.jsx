import {useState} from "react";
import TabButton from "./TabButton.jsx";
import Section from "./Section.jsx";
import {EXAMPLES} from "../data.js";
import Tabs from "./Tabs.jsx";
let tabContent = "Please click a button";

function handleSelect(selectedButton){
    // selectedButton => 'components', 'jsx'...
    setSelectedTopic(selectedButton);
    tabContent = selectedButton;
    console.log(tabContent);
}
//console.log('app component rendering');
export default function Examples(){
    // const [selectedTopic, setSelectedTopic] = useState('components');
    const [selectedTopic, setSelectedTopic] = useState();
//h useState einai h shmantikoterh entolh ths react gia ta hooks



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
    return (
        <Section title ="Examples" id="examples">
            {/*<h2>Examples</h2>*/}
            <Tabs buttons={
                <>
                <TabButton isSelected={selectedTopic === 'components'} onSelect={() => handleSelect('components')}>Components</TabButton>
            <TabButton isSelected={selectedTopic === 'jsx'} onSelect={() => handleSelect('jsx')}>JSX</TabButton>
            <TabButton isSelected={selectedTopic === 'props'} onSelect={() => handleSelect('props')}>props</TabButton>
            <TabButton  isSelected={selectedTopic === 'state'} onSelect={() => handleSelect('state')}>State</TabButton>
                    {tabContent}
                </>}></Tabs>

            <menu></menu>
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

        </Section>
    );

}