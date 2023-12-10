import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { AircraftForm } from "./AircraftForm";

function AircraftModal({ handleSubmit, defaultValue, isOpen, onClose }) {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <AircraftForm
              handleSubmit={handleSubmit}
              defaultValue={defaultValue}
            />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export { AircraftModal };
