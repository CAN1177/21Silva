import React from 'react';

import { render } from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect';

import Modal from '../index';

// Modal 单元测试
describe('Modal 单元测试', () => {
  it('Modal 存在', () => {
    expect(Modal).toBeTruthy();
  });

  it('Modal 默认渲染', () => {
    const { getByText } = render(
      <Modal isOpen={true} onClose={() => {}}>
        <h2>Hello, Im a modal!</h2>
      </Modal>,
    );
    expect(getByText('Hello, Im a modal!')).toBeInTheDocument();
  });

  it('Modal 点击关闭', () => {
    const onClose = jest.fn();
    const { getByText } = render(
      <Modal isOpen={true} onClose={onClose}>
        <h2>Hello, Im a modal!</h2>
      </Modal>,
    );
    getByText('x').click();
    expect(onClose).toBeCalled();
  });

  it('Modal 点击遮罩层', () => {
    const onClose = jest.fn();
    const { getByText } = render(
      <Modal isOpen={true} onClose={onClose}>
        <h2>Hello, Im a modal!</h2>
      </Modal>,
    );
    getByText('Hello, Im a modal!').click();
    expect(onClose).not.toBeCalled();
  });
});
