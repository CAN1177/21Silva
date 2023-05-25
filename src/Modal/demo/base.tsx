import { Modal } from '21Silva';
import { Button } from 'antd';
import React, { useState } from 'react';

const App: React.FC = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="container">
      <Button type="primary" onClick={openModal}>
        Open Modal
      </Button>
      <Modal isOpen={modalOpen} onClose={closeModal} title="我是标题">
        <h2>Hello, Im a modal!</h2>
      </Modal>
    </div>
  );
};

export default App;
