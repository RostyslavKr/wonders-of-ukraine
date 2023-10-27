import React from "react";
import { useState } from "react";

export const useToggleModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return {
    isModalOpen,
    toggleModal,
  };
};