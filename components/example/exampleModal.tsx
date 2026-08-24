import { Modal, ModalProps } from "react-native";

export function ExampleModal({visible,onRequestClose,children}:ModalProps){
  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onRequestClose}
    >
      {children}
    </Modal>
  );
}