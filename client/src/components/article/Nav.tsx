import React, { useState } from 'react';

interface Props {}

const RenderOpenList = () => {
  return (
    <nav>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
      </ul>
    </nav>
  );
};

const RenderCloseList = () => {
  return <div>Open Navigation</div>;
};

const Nav = (props: Props) => {
  const [openList, setOpenList] = useState(false);
  const onClickNavButton = () => {
    setOpenList(!openList);
  };
  return (
    <div className="container">
      <div>
        <button onClick={onClickNavButton}>Toggle</button>
      </div>
      {openList ? <RenderOpenList /> : <RenderCloseList />}
    </div>
  );
};

export default Nav;
