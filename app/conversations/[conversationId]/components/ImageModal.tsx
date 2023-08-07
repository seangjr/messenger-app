"use client";

import Modal from "@/app/components/Modal";
import Image from "next/image";

interface ImageModalProps {
  isOpen?: boolean;
  onClose: () => void;
  src?: string | null;
}

const ImageModal: React.FC<ImageModalProps> = ({ isOpen, onClose, src }) => {
  if (!src) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div
        // fit the image to the modal and maintain original aspect ratio
        className="
          w-full
          h-full
          max-w-[90vw]
          max-h-[90vh]
        "
      >
        <Image
          alt="message image"
          fill
          objectFit="cover"
          objectPosition="center"
          src={src}
        />
      </div>
    </Modal>
  );
};

export default ImageModal;
