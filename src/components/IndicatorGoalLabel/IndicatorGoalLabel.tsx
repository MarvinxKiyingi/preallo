import React from 'react';

type IndicatorGoalLabelProps = {
  className: string;
  name: string;
};

const IndicatorGoalLabel: React.FC<IndicatorGoalLabelProps> = ({
  className,
  name,
}) => {
  return (
    <div className='label-container'>
      <span className={className}></span>
      <span>{name}</span>
    </div>
  );
};

export default IndicatorGoalLabel;
