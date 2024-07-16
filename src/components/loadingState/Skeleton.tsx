import React from 'react';

interface Props {
  loadingCls: string;
}

const Skeleton: React.FC<Props> = (props) => {
  const { loadingCls } = props;

  return (
    <div className={`bg-grey-sec/60 animate-pulse overflow-hidden  w-full ${loadingCls}`}></div>
  );
}

export default Skeleton;
