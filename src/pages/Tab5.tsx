import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';

const Tab5: React.FC = () => {
  const [inputValue, setInputValue] = useState<number | string>('');
  const [inputUnit, setInputUnit] = useState<string>('km/h');
  const [outputValue, setOutputValue] = useState<number | string>('');
  const [outputUnit, setOutputUnit] = useState<string>('m/s');

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

    // Lógica de conversión de velocidades
    if (inputUnit === 'km/h' && outputUnit === 'm/s') {
      result = input / 3.6; // De km/h a m/s
    } else if (inputUnit === 'm/s' && outputUnit === 'km/h') {
      result = input * 3.6; // De m/s a km/h
    } else if (inputUnit === 'km/h' && outputUnit === 'mph') {
      result = input * 0.621371; // De km/h a mph
    } else if (inputUnit === 'mph' && outputUnit === 'km/h') {
      result = input / 0.621371; // De mph a km/h
    } else if (inputUnit === 'm/s' && outputUnit === 'mph') {
      result = input * 2.23694; // De m/s a mph
    } else if (inputUnit === 'mph' && outputUnit === 'm/s') {
      result = input / 2.23694; // De mph a m/s
    } else {
      result = input; // Mismos tipos de unidad
    }

    setOutputValue(result);
    setInputValue(''); // Reiniciar el valor de entrada
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle className="text-white text-center font-bold bg-gradient-to-r from-blue-500 to-indigo-600 py-4 shadow-lg ">
            Conversión de Unidades de Velocidad
          </IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="bg-gradient-to-r from-blue-100 to-indigo-200 min-h-screen flex justify-center items-center p-6 h-full">
        <div className="bg-blue-100 p-6 rounded-b-lg shadow-lg max-w-lg w-full h-full">
        <div className="p-6 bg-white  rounded-lg shadow-md w-full max-w-md">
          <h1 className="text-center text-2xl font-bold text-gray-700 mb-6">Conversión de Velocidad</h1>

          <div className="mb-4">
            <label htmlFor="inputUnit" className="block text-sm font-medium text-gray-600 mb-2">Velocidad de entrada</label>
            <div className="flex items-center">
              <input
                type="number"
                className="border border-gray-300 rounded-lg p-3 mr-2 w-full"
                placeholder="0"
                value={inputValue}
                onChange={handleInputChange}
                id="inputValue"
              />
              <select
                id="inputUnit"
                className="border border-gray-300 rounded-lg p-3"
                value={inputUnit}
                onChange={handleInputUnitChange}
              >
                <option value="km/h">km/h</option>
                <option value="m/s">m/s</option>
                <option value="mph">mph</option>
              </select>
            </div>
          </div>

          <div className="text-center font-bold text-lg text-gray-500 mb-4">Hasta</div>

          <div className="mb-4">
            <label htmlFor="outputUnit" className="block text-sm font-medium text-gray-600 mb-2">Velocidad de salida</label>
            <div className="flex items-center">
              <input
                type="text"
                className="border border-gray-300 rounded-lg p-3 mr-2 w-full"
                value={outputValue}
                readOnly
                id="outputValue"
                placeholder="0"
              />
              <select
                id="outputUnit"
                className="border border-gray-300 rounded-lg p-3"
                value={outputUnit}
                onChange={handleOutputUnitChange}
              >
                <option value="km/h">km/h</option>
                <option value="m/s">m/s</option>
                <option value="mph">mph</option>
              </select>
            </div>
          </div>

          <div className="text-center">
            <IonButton
              onClick={convertUnits}
              className="w-full  text-white shadow-lg"
            >
              Convertir
            </IonButton>
          </div>

          <div className="mt-6 p-4 bg-blue-50 rounded-lg text-center">
            <h3 className="font-semibold text-gray-600">Resultado</h3>
            <p className="text-gray-700">{outputValue ? `${outputValue} ${outputUnit}` : 'Ingrese un valor para convertir'}</p>
          </div>
        </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab5;