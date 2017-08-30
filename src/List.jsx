import React from 'react';

function List(props) {
  const l = props.list.map(item => (
    <li key={item.id}>{item.text}</li>
  ));
  return (
    <ul>{l}</ul>
  );
}

export default List;