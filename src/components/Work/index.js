import React from 'react';
import "../../vender/glyphicons.css";
import '../../styles/works.scss';

import Data from '../../data/work.json';

import Card from './Card';

class Work extends React.Component {
  render() {
    return (
      <div className="section work">
        <div className="container">
          {Data.items.map((value, index) => {
            return <Card {...value} key={index}/>
          })}
        </div>
      </div>
    )
  }
}

export default Work;
