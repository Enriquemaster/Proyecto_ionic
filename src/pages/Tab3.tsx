import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';

const Tab3: React.FC = () => {
  const [inputValue, setInputValue] = useState<number | string>('');
  const [inputUnit, setInputUnit] = useState<string>('C');
  const [outputValue, setOutputValue] = useState<number | string>('');
  const [outputUnit, setOutputUnit] = useState<string>('F');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleInputUnitChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setInputUnit(e.target.value);
  };

  const handleOutputUnitChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setOutputUnit(e.target.value);
  };

  const convertUnits = () => {
    let result: number = 0;
    const input = typeof inputValue === 'string' ? parseFloat(inputValue) : inputValue;

    if (isNaN(input)) {
      setOutputValue('Error');
      return;
    }

    // Lógica de conversión de temperaturas
    if (inputUnit === 'C' && outputUnit === 'F') {
      result = (input * 9) / 5 + 32; // Celsius a Fahrenheit
    } else if (inputUnit === 'F' && outputUnit === 'C') {
      result = ((input - 32) * 5) / 9; // Fahrenheit a Celsius
    } else if (inputUnit === 'C' && outputUnit === 'K') {
      result = input + 273.15; // Celsius a Kelvin
    } else if (inputUnit === 'K' && outputUnit === 'C') {
      result = input - 273.15; // Kelvin a Celsius
    } else if (inputUnit === 'F' && outputUnit === 'K') {
      result = ((input - 32) * 5) / 9 + 273.15; // Fahrenheit a Kelvin
    } else if (inputUnit === 'K' && outputUnit === 'F') {
      result = ((input - 273.15) * 9) / 5 + 32; // Kelvin a Fahrenheit
    } else {
      result = input; // Mismos tipos de unidad
    }

    setOutputValue(result);
    setInputValue(''); // Reiniciar el valor de entrada a 0
  };


  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
        <IonTitle className="text-white text-center font-bold bg-gradient-to-r from-blue-500 to-indigo-600 py-4 shadow-lg ">
            Conversión de Unidades de Temperatura
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="bg-gradient-to-r from-blue-100 to-indigo-200 min-h-screen flex justify-center items-center p-6 h-full">
        <div className="bg-blue-100 p-6 rounded-b-lg shadow-lg max-w-lg w-full h-full">
          <div className="p-6 bg-white  rounded-lg shadow-md w-full max-w-md">
            <h1 className="text-center text-2xl font-bold text-foreground mb-6 text-gray-700">Conversión de Temperatura</h1>

            {/* Valores de Entrada */}
            <div className="mb-4">
              <label htmlFor="inputUnit" className="block text-sm font-medium text-muted-foreground text-gray-700">Temperatura de entrada</label>
              <div className="flex items-center">
                <input
                  type="number"
                  className="border border-border rounded-md p-2 mr-2 w-full"
                  placeholder="0"
                  value={inputValue}
                  onChange={handleInputChange}
                  id="inputValue"
                />
                <select
                  id="inputUnit"
                  className="border border-border rounded-md p-2"
                  value={inputUnit}
                  onChange={handleInputUnitChange}
                >
                  <option value="C">°C</option>
                  <option value="F">°F</option>
                  <option value="K">K</option>
                </select>
              </div>
            </div>

            {/* Salida */}
            <div className="text-center font-bold text-lg text-muted-foreground mb-4 text-gray-700">Hasta</div>
            <div className="mb-4">
              <label htmlFor="outputUnit" className="block text-sm font-medium text-muted-foreground text-gray-700">Temperatura de salida</label>
              <div className="flex items-center">
                <input
                  type="text"
                  className="border border-border rounded-md p-2 mr-2 w-full"
                  value={outputValue}
                  readOnly
                  id="outputValue"
                  title="Valor convertido"
                  placeholder="0"
                />
                <select
                  id="outputUnit"
                  className="border border-border rounded-md p-2"
                  value={outputUnit}
                  onChange={handleOutputUnitChange}
                >
                  <option value="C">°C</option>
                  <option value="F">°F</option>
                  <option value="K">K</option>
                </select>
              </div>
            </div>

            {/* Botón de conversión */}
            <div className="text-center mb-4">
              <IonButton onClick={convertUnits}>Convertir</IonButton>
            </div>

            {/* Información de la conversión */}
            <div className="mt-4 p-4 bg-card rounded-md">
              <h3 className="font-semibold text-muted-foreground text-gray-700">CONVERSIÓN</h3>
              <p className="text-muted-foreground text-gray-700">El resultado de la conversión es {outputValue} {outputUnit}</p>
            </div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;