import React from 'react';

function getFilterCSSStyles(settings) { //формируем строку с css значением
  let filterString = '';

  for (let prop in settings) {
    if (settings.hasOwnProperty(prop)) {
      switch (prop) {
        case 'hue':
          filterString += 'hue-rotate(' + settings[prop] + 'deg) ';
          break;
        default:
          filterString += prop + '(' + settings[prop] + '%) ';
      }
    }
  }

  return filterString;
}

function Filter({children, name, settings, selected, onClick = () => {} }) { //selected - состояние фильтра, onClick - пустой обработчик на случай клика на большую картинку, children - компонент Image
  const filter = getFilterCSSStyles(settings);
  const style = {filter}; //передаем строку filter
  const className = `filter${selected ? ' selected' : ''}`;

  return (
    <div className={className} onClick={() => onClick(name, settings)}> {/* оборачиваем функцию onClick в пустую функцию, чтобы указать аргументы*/}
      <div className="image-container" style={style}>
        {children}
      </div>
    </div>
  );
}

export default Filter;