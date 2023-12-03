import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { AirportForm } from "./AirportForm";

function AirportModal({ handleSubmit, defaultValue, isOpen, onClose }) {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <AirportForm
              handleSubmit={handleSubmit}
              defaultValue={defaultValue}
            />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export { AirportModal };
