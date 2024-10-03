import React, { useState,  useEffect } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';

const Tab2: React.FC = () => {
  const [inputValue, setInputValue] = useState<number | string>('');
  const [inputUnit, setInputUnit] = useState<string>('cm');
  const [outputValue, setOutputValue] = useState<number | string>('');
  const [outputUnit, setOutputUnit] = useState<string>('mm');

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

    // Lógica de conversión
    if (inputUnit === 'cm' && outputUnit === 'mm') {
      result = input * 10; // cm a mm
    } else if (inputUnit === 'mm' && outputUnit === 'cm') {
      result = input / 10; // mm a cm
    } else if (inputUnit === 'cm' && outputUnit === 'in') {
      result = input / 2.54; // cm a in
    } else if (inputUnit === 'in' && outputUnit === 'cm') {
      result = input * 2.54; // in a cm
    } else if (inputUnit === 'cm' && outputUnit === 'm') {
      result = input / 100; // cm a m
    } else if (inputUnit === 'm' && outputUnit === 'cm') {
      result = input * 100; // m a cm
    } else if (inputUnit === 'm' && outputUnit === 'km') {
      result = input / 1000; // m a km
    } else if (inputUnit === 'km' && outputUnit === 'm') {
      result = input * 1000; // km a m
    } else if (inputUnit === 'km' && outputUnit === 'cm') {
      result = input * 100000; // km a cm
    } else if (inputUnit === 'cm' && outputUnit === 'km') {
      result = input / 100000; // cm a km
    } else if (inputUnit === 'mi' && outputUnit === 'km') {
      result = input * 1.60934; // mi a km
    } else if (inputUnit === 'km' && outputUnit === 'mi') {
      result = input / 1.60934; // km a mi
    } else if (inputUnit === 'ft' && outputUnit === 'm') {
      result = input * 0.3048; // ft a m
    } else if (inputUnit === 'm' && outputUnit === 'ft') {
      result = input / 0.3048; // m a ft
    } else if (inputUnit === 'yd' && outputUnit === 'm') {
      result = input * 0.9144; // yd a m
    } else if (inputUnit === 'm' && outputUnit === 'yd') {
      result = input / 0.9144; // m a yd
    } else if (inputUnit === 'mm' && outputUnit === 'km') {
      result = input / 1000000; // mm a km
    } else if (inputUnit === 'mm' && outputUnit === 'yd') {
      result = input / 914.4; // mm a yd
    } else if (inputUnit === 'mm' && outputUnit === 'ft') {
      result = input / 304.8; // mm a ft
    } else if (inputUnit === 'mm' && outputUnit === 'mi') {
      result = input / 1.609e+6; // mm a mi
    } else if (inputUnit === 'mm' && outputUnit === 'in') {
      result = input / 25.4; // mm a in
    } else if (inputUnit === 'yd' && outputUnit === 'mm') {
      result = input * 914.4; // yd a mm
    } else if (inputUnit === 'in' && outputUnit === 'mm') {
      result = input * 25.4; // in a mm
    } else if (inputUnit === 'ft' && outputUnit === 'mm') {
      result = input * 304.8; // ft a mm
    } else if (inputUnit === 'mi' && outputUnit === 'mm') {
      result = input * 1.609e+6; // mi a mm
    } else if (inputUnit === 'yd' && outputUnit === 'km') {
      result = input * 0.0009144; // yd a km
    } else if (inputUnit === 'ft' && outputUnit === 'km') {
      result = input * 0.0003048; // ft a km
    } else if (inputUnit === 'in' && outputUnit === 'km') {
      result = input * 2.54e-5; // in a km
    } else {
      result = input; // Mismos tipos de unidad
    }

    setOutputValue(result);
    setInputValue(''); // Reiniciar el valor de entrada a 0
  };
    

   // Usar useEffect para actualizar la conversión cuando cambian las unidades
   useEffect(() => {
    if (inputValue !== '') {
      convertUnits();
    }
  }, [inputUnit, outputUnit]);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
        <IonTitle className="text-white text-center font-bold bg-gradient-to-r from-blue-500 to-indigo-600 py-4 shadow-lg text-gray-700">
            Conversión de Unidades de longitud
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="bg-gradient-to-r from-blue-100 to-indigo-200 min-h-screen flex justify-center items-center p-6 h-full">
        <div className=" bg-blue-100 p-6 rounded-b-lg shadow-lg max-w-lg w-full h-full">
          <div className="p-6 bg-white rounded-b-lg shadow-md w-full max-w-md">
            <h1 className="text-center text-2xl font-bold text-foreground mb-6 text-gray-700">Conversión de Unidades de Longitud</h1>

            {/* Valores de Entrada */}
            <div className="mb-4">
              <label htmlFor="inputUnit" className="block text-sm font-medium text-gray-700 text-muted-foreground">Tipo de entrada</label>
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
                  <option value="cm">cm</option>
                  <option value="mm">mm</option>
                  <option value="m">m</option>
                  <option value="km">km</option>
                  <option value="mi">mi</option>
                  <option value="ft">ft</option>
                  <option value="in">in</option>
                  <option value="yd">yd</option>
                </select>
              </div>
            </div>

            {/* Salida */}
            <div className="text-center font-bold text-lg text-muted-foreground mb-4 text-gray-700">Hasta</div>
            <div className="mb-4">
              <label htmlFor="outputUnit" className="block text-sm font-medium text-muted-foreground text-gray-700">Tipo de salida</label>
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
                  <option value="cm">cm</option>
                  <option value="mm">mm</option>
                  <option value="m">m</option>
                  <option value="km">km</option>
                  <option value="mi">mi</option>
                  <option value="ft">ft</option>
                  <option value="in">in</option>
                  <option value="yd">yd</option>
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
              <p className="text-muted-foreground text-gray-700">"El resultado de la conversion fue de {outputValue} {outputUnit}</p>
              { /* <p className="text-muted-foreground">1 in = 2.54 cm</p>
              <p className="text-muted-foreground">1 m = 1000 mm</p>
              <p className="text-muted-foreground">1 km = 1000 m</p>
              <p className="text-muted-foreground">1 mi = 1.60934 km</p>
              <p className="text-muted-foreground">1 ft = 0.3048 m</p>
              <p className="text-muted-foreground">1 yd = 0.9144 m</p> */}
            </div>

            <div className="mt-4 p-4 bg-card rounded-md text-gray-700">
            <h4 className="text-muted-foreground">Las equivalencias son</h4>
            <p className="text-muted-foreground">1 m = 1000 mm</p>
            <p className="text-muted-foreground">1 km = 1000 m</p>
            <p className="text-muted-foreground">1 mi = 1.60934 km</p>
            <p className="text-muted-foreground">1 ft = 0.3048 m</p>
            <p className="text-muted-foreground">1 yd = 0.9144 m</p>
            <p className="text-muted-foreground">1 cm = 10 mm</p>
            <p className="text-muted-foreground">1 cm = 0.01 m</p>
            <p className="text-muted-foreground">1 in = 2.54 cm</p>
            </div>   
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;