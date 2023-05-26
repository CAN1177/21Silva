import React, { memo } from 'react';

import './styles/index.less';

const defaultUrl = 'https://www.mancity.com/dist/images/logos/crest.svg';

interface ILoadingProps {
  url: string; // 中间自定义图片
  text: string; // 文字描述
  isShow: boolean; // 是否隐藏
  isMask: boolean; // 是否显示遮罩层
}

const Loading: React.FC<ILoadingProps> = (props) => {
  const { url, text, isShow, isMask } = props;
  return (
    <div
      className={`loading ${isMask ? 'mask' : ''}`}
      style={{ display: isShow ? 'none' : 'block' }}
      onClick={(e) => e.stopPropagation()}
    >
      <div className="anima" />
      <div className="image-box">
        <img className="img" src={url || defaultUrl} />
      </div>
      <div className="text">{text || '加载中...'}</div>
    </div>
  );
};

export default memo(Loading);
