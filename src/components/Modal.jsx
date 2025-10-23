import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Modal({ open, onClose, children }) {
  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const modalVariants = {
    hidden: { y: "50px", opacity: 0 },
    visible: { y: "0", opacity: 1, transition: { type: "spring", stiffness: 300, damping: 30 } },
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="modal-backdrop"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={onClose}
            aria-hidden="true"
          />
          <motion.div
            className="modal-content"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            role="dialog"
            aria-modal="true"
          >
            <button onClick={onClose} className="modal-close-btn" aria-label="Close modal">×</button>
            {children}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}