import { useState } from 'react';
import './SideSheet.css'


interface SideSheetProps {
    isOpen: boolean,
    onClose: () => void,
   children: React.ReactNode
  }


export const SideSheet:React.FC<SideSheetProps> = ({ isOpen, onClose,  children }) => {



return (
    <div className={`side-sheet ${isOpen ? 'open' : ''}`}>
      <div className="side-sheet-content">
        <button className="close-button" onClick={onClose}>
          X
        </button>
        children
        {children}
      </div>
    </div>
  );
};


