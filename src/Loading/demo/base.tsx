import { Loading } from '21Silva';
import { Button } from 'antd';

import React, { useState } from 'react';

import './base.less';

const App = () => {
  const [show, setShow] = useState<boolean>(true);
  const [mask, setMask] = useState<boolean>(true);
  return (
    <>
      <div className="btn">
        <Button type="primary" onClick={() => setShow(!show)}>
          {show ? '显示' : '隐藏'}
        </Button>

        <Button type="primary" onClick={() => setMask(!mask)}>
          {mask ? '隐藏遮罩层' : '显示遮罩层'}
        </Button>
      </div>

      <div className="container">
        <Loading
          url="https://www.mancity.com/dist/images/logos/crest.svg"
          text="加载中..."
          isShow={show}
          isMask={mask}
        />
      </div>
    </>
  );
};

export default App;
