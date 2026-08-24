import { Modal, ModalProps } from "react-native";

export function BaseModal({visible,onRequestClose,children}:ModalProps){
  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onRequestClose}
    >
      {children}
    </Modal>
  )
}