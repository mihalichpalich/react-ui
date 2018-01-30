import React from 'react';

function Range({name, value, min, max, onChange}) {
  return (
    <div className="setting">
      <label>
        <div>{name}</div> {/* название "ползунка" */}
        <div>{value}</div> {/* значение */}
      </label>

      <input
        id={name}
        type="range"
        value={value}
        step="1"
        min={min}
        max={max}
        onChange={onChange} /> {/* получаем ф-цию обработки из Range*/}
    </div>
  );
}

export default Range;