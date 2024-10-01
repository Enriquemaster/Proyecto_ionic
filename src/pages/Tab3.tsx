import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import Display from './components/Display';
import Button from './components/Button';

const App: React.FC = () => {
  const [input, setInput] = useState<string>("");

  const handleButtonClick = (value: string) => {
    // Permite solo números y los operadores permitidos
    if (/^[0-9+\-*/]*$/.test(input + value)) {
      setInput(prev => prev + value);
    }
  };

  const calculateResult = () => {
    try {
      // Evaluar la expresión solo con operadores permitidos
      const result = eval(input);
      setInput(String(result));
    } catch (error) {
      setInput("Error");
    }
  };

  const clearInput = () => {
    setInput("");
  };

  interface DisplayProps {
    value: string;
    className?: string; // Agregar esta línea
  }
  
  const Display: React.FC<DisplayProps> = ({ value, className }) => {
    return (
      <div className={`text-right ${className}`}>
        {value}
      </div>
    );
  };



  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle className="text-center text-lg">Convertidor de Peso</IonTitle>
        </IonToolbar>
      </IonHeader >
      <IonContent className="flex flex-col items-center justify-center min-h-screen bg-gray-100 ion-padding">
      <h2 className="text-2xl font-bold mt-4 mb-2 flex flex-col items-center justify-center">Ingresa las unidades a convertir</h2>
      <h2 className="text-sm flex flex-col items-center justify-center"></h2>
        <Display value={input} className="w-full text-right text-3xl p-4 border rounded shadow-md" />
        <div className="grid grid-cols-4 gap-2 w-full max-w-md p-4 bg-slate-700">
          <Button label="7" onClick={() => handleButtonClick("7")} />
          <Button label="8" onClick={() => handleButtonClick("8")} />
          <Button label="9" onClick={() => handleButtonClick("9")} />
          <Button label="cm" onClick={() => handleButtonClick("cm")} />
          <Button label="4" onClick={() => handleButtonClick("4")} />
          <Button label="5" onClick={() => handleButtonClick("5")} />
          <Button label="6" onClick={() => handleButtonClick("6")} />
          <Button label="m" onClick={() => handleButtonClick("m")} />
          <Button label="1" onClick={() => handleButtonClick("1")} />
          <Button label="2" onClick={() => handleButtonClick("2")} />
          <Button label="3" onClick={() => handleButtonClick("3")} />
          <Button label="km" onClick={() => handleButtonClick("km")} />
          <Button label="0" onClick={() => handleButtonClick("0")} />
          <Button label="C" onClick={clearInput} />
          <Button label="mi" onClick={() => handleButtonClick("mi")} />
          <Button label="=" onClick={calculateResult} />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default App;