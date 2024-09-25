// src/components/Button.tsx
// src/components/Button.tsx
import React from 'react';
import './Button.css'; // Importar el archivo de estilo
import { IonButton } from '@ionic/react';

interface ButtonProps {
  label: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  // Verificar si el botón es un operador
  const isOperator = (val: string) => {
    return val === '+' || val === '-' || val === '*' || val === '/';
  };

  return (
    <div className={`button-wrapper ${isOperator(label) ? 'operator' : ''}`} onClick={onClick}>
      <IonButton expand="full">{label}</IonButton>
    </div>
  );
};

export default Button;