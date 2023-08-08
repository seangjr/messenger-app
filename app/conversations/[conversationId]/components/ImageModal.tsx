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
      <div>
        <Image
          alt="message image"
          width={1000}
          height={1000}
          className="
            object-cover
            cursor-pointer
          "
          src={src}
        />
      </div>
    </Modal>
  );
};

export default ImageModal;
