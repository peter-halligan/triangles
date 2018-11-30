import React from 'react';

const text = `A Simple application to take in triangle side lengths and return the type of triangle.\n
You can also download a cli which contains this functionality or just use the api try using post man to hit post /triangle {a:1, b:2 c: 3} `;
const Instructions = () => {
  return (
    <div>{text.split("\n").map((i, key) => {
      return <div key={key}>{i}</div>;
    })}
    </div>);
};


export {Instructions};