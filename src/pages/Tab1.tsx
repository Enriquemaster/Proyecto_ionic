import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonSelect, IonSelectOption, IonButton } from '@ionic/react';

const Tab2: React.FC = () => {
  const [inputValue, setInputValue] = useState<number | string>('');
  const [inputUnit, setInputUnit] = useState<string>('kg');
  const [outputValue, setOutputValue] = useState<number | string>('0');
  const [outputUnit, setOutputUnit] = useState<string>('g');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    convertUnits(e.target.value, inputUnit, outputUnit);
  };

  const handleInputUnitChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setInputUnit(e.target.value);
    convertUnits(inputValue, e.target.value, outputUnit); 
  };

  const handleOutputUnitChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setOutputUnit(e.target.value);
    convertUnits(inputValue, inputUnit, e.target.value);
  };

  const convertUnits = (inputVal: string | number, inputUnit: string, outputUnit: string) => {
    let result: number = 0;
    const input = typeof inputVal === 'string' ? parseFloat(inputVal) : inputVal;

    if (isNaN(input)) {
      setOutputValue('Error');
      return;
    }

    // Conversion logic
    if (inputUnit === 'kg') {
      if (outputUnit === 'g') {
        result = input * 1000;
      } else if (outputUnit === 'lb') {
        result = input * 2.20462;
      } else if (outputUnit === 'oz') {
        result = input * 35.274;
      } else {
        result = input; // kg to kg
      }
    } else if (inputUnit === 'g') {
      if (outputUnit === 'kg') {
        result = input / 1000;
      } else if (outputUnit === 'lb') {
        result = input * 0.00220462;
      } else if (outputUnit === 'oz') {
        result = input * 0.035274;
      } else {
        result = input; // g to g
      }
    } else if (inputUnit === 'lb') {
      if (outputUnit === 'kg') {
        result = input * 0.453592;
      } else if (outputUnit === 'g') {
        result = input * 453.592;
      } else if (outputUnit === 'oz') {
        result = input * 16;
      } else {
        result = input; // lb to lb
      }
    } else if (inputUnit === 'oz') {
      if (outputUnit === 'kg') {
        result = input * 0.0283495;
      } else if (outputUnit === 'g') {
        result = input * 28.3495;
      } else if (outputUnit === 'lb') {
        result = input * 0.0625;
      } else {
        result = input; // oz to oz
      }
    }

    setOutputValue(result);
  };

  return (
    <IonPage>
      <IonHeader>
      <IonTitle className="text-white text-center font-bold bg-gradient-to-r from-blue-500 to-indigo-600 py-4 shadow-lg ">
            Conversión de Unidades de peso
          </IonTitle>
      </IonHeader >
      <IonContent className="bg-gradient-to-r from-blue-100 to-indigo-200 min-h-screen flex justify-center items-center p-6 h-full">
        <div className="bg-blue-100 p-6 rounded-xl shadow-lg max-w-lg w-full h-full">
      <div className="p-6 bg-white rounded-lg shadow-md w-full max-w-md mt-8">
        <h1 className="text-center text-2xl font-bold text-foreground mb-6 text-gray-700">Conversión de Unidades de peso</h1>

       {/* Valores de Entrada */}
<div className="mb-4">
  <label htmlFor="inputUnit" className="block text-sm font-medium text-muted-foreground text-gray-700">Tipo de entrada</label>
  <div className="flex items-center">
    <input type="number" className="border border-border rounded-md p-2 mr-2 w-full" placeholder="0" value={inputValue} onChange={handleInputChange}id="inputValue"/>
    <select id="inputUnit" className="border border-border rounded-md p-2" value={inputUnit} onChange={handleInputUnitChange}> 
    <option value="kg">kg</option>
    <option value="g">g</option>
    <option value="lb">lb</option>
    <option value="oz">oz</option>
     </select>
  </div>
</div>

{/* Salida*/}
<div className="text-center font-bold text-lg text-muted-foreground mb-4 text-gray-700">Hasta</div>
<div className="mb-4">
  <label htmlFor="outputUnit" className="block text-sm font-medium text-muted-foreground text-gray-700">Tipo de salida</label>
  <div className="flex items-center">
  <input type="text"className="border border-border rounded-md p-2 mr-2 w-full" value={outputValue} readOnly id="outputValue" title="Valor convertido" placeholder="0"/>
    <select id="outputUnit" className="border border-border rounded-md p-2" value={outputUnit} onChange={handleOutputUnitChange}>
    <option value="kg">kg</option>
    <option value="g">g</option>
    <option value="lb">lb</option>
    <option value="oz">oz</option>
    </select>
  </div>
</div>

        {/* informacion de la conversión*/}
        <div className="mt-4 p-4 bg-card rounded-md text-gray-700">
          <h3 className="font-semibold text-muted-foreground text-gray-700">CONVERSIÓN</h3>
          <p className="text-muted-foreground">
                1 kg = 1000 g<br />
                1 kg = 2.20462 lb<br />
                1 kg = 35.274 oz<br />
                1 lb = 453.592 g<br />
                1 lb = 16 oz<br />
                1 oz = 28.3495 g
              </p>
        </div>
      </div>
    </div>
    </IonContent>
</IonPage>
  );
};


export default Tab2;