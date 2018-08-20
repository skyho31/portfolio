import React from 'react';

const Card = (value) => {
  const {
    title,
    description,
    skill,
    git,
    imgPath
  } = value;

  const cardStyle = imgPath ? {
    backgroundImage: `url(${imgPath})`
  } : {
    height:'80px', border:'none'
  }

  return (
    <div>
      <div className="works title">
        <p>
          <b>{title}</b>
          <br/>{description}</p>
          <ul className="git">
            {git ? git.map((value, index) => {
              return <li key={index}><a className="github" href={value}>{value}</a></li>
            }): ''}
          </ul>
          
        <ul className="skillBox">
          {skill.map((value, index) => {
            return <li key={index}>{value}</li>
          })}
        </ul>
      </div>
      <div className="works piece" style={cardStyle}>
        <div className="pieceWrap"></div>
      </div>
    </div>
  )
}

export default Card;
