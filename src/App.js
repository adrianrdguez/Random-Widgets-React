import React, {useState} from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';

const items = [
  {
    title: 'React is good',
    content: 'Yes'
  },
  {
    title: 'Why use React?',
    content: 'No'
  },
  {
    title: 'Because is good',
    content: 'Why?'
  }
];

const options = [
  {
    label:'The Color Red',
    title:'red'
  },
  {
    label:'The Color Blue',
    title:'blue'
  },
  {
    label:'The color Green',
    title:'green'
  }
]

export default () => {
  const [selected, setSelected] = useState(options[0])


  return <div>
          <Dropdown 
          selected={selected}
          onSelectedChange={setSelected}
          options={options}
          />
        </div>
};
