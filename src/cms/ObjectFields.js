import React from 'react';
import './ObjectFields.scss';

const ObjectFields = (props) => {
  const { onChange, classNameWrapper, value } = props;
  const arrValue = Array.from(value);
  const change = (v, k) => {
    onChange(value.set(k, v));
  };
  const list = arrValue.map(([k, v]) => (
    <div key={k}>
      <div className="object-fields-widget__key">{k}</div>
      <div className="object-fields-widget__value">
        <input
          type="text"
          className={classNameWrapper}
          value={v || ''}
          onChange={e => change(e.target.value, k)}
        />
      </div>
    </div>
  ));
  return (
    <div className={classNameWrapper}>
      <div className="object-fields-widget">
        <div className="object-fields-widget__list">{list}</div>
      </div>
    </div>
  );
};

export default ObjectFields;
