import React from 'react';

export default function(props) {
  const atts = props.feature.properties;
  return (
    <li>
      {atts.PrimaryName}
      <button onClick={props.handleDownload} value={atts.OBJECTID}>download</button>
    </li>
  );
}
