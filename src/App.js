import React from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';

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

export default () => {
  return <div>
          <Search/>
        </div>
};
