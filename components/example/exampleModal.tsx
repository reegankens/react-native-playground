import { Modal, ModalProps } from "react-native";

export function ExampleModal({visible,onRequestClose}:ModalProps){
  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onRequestClose}
    >
      {/* isi modal */}
    </Modal>
  );
}