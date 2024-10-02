import React, { useState } from 'react';
import { IonContent, IonPage, IonButton, IonModal, IonHeader, IonToolbar, IonTitle, IonItem, IonLabel, IonInput, IonSelect, IonSelectOption } from '@ionic/react';

const Tab6: React.FC = () => {
  const [showInputModal, setShowInputModal] = useState(false);
  const [showOutputModal, setShowOutputModal] = useState(false);
  const [inputValue, setInputValue] = useState<number | string>('');
  const [inputUnit, setInputUnit] = useState<string>('Hz');
  const [outputUnit, setOutputUnit] = useState<string>('kHz');
  const [outputValue, setOutputValue] = useState<number | string>('');

  // Abrir modal de entrada
  const handleOpenInputModal = () => {
    setShowInputModal(true);
  };

  // Cerrar primer modal y abrir segundo
  const handleInputOk = () => {
    setShowInputModal(false);
    setShowOutputModal(true);
  };

  // Realizar la conversión al cerrar el segundo modal
  const handleOutputOk = () => {
    setShowOutputModal(false);
    convertUnits();
  };

  // Lógica de conversión
  const convertUnits = () => {
    let result: number = 0;
    const input = typeof inputValue === 'string' ? parseFloat(inputValue) : inputValue;

    if (isNaN(input)) {
      setOutputValue('Error');
      return;
    }

// Conversión de frecuencias
if (inputUnit === 'Hz' && outputUnit === 'kHz') {
    result = input / 1000;
  } else if (inputUnit === 'kHz' && outputUnit === 'Hz') {
    result = input * 1000;
  } else if (inputUnit === 'kHz' && outputUnit === 'MHz') {
    result = input / 1000;
  } else if (inputUnit === 'MHz' && outputUnit === 'kHz') {
    result = input * 1000;
  } else if (inputUnit === 'Hz' && outputUnit === 'MHz') {
    result = input / 1_000_000;
  } else if (inputUnit === 'MHz' && outputUnit === 'Hz') {
    result = input * 1_000_000;
  } else if (inputUnit === 'Hz' && outputUnit === 'GHz') {
    result = input * 0.000000001; // Convertir Hz a GHz
  } else if (inputUnit === 'GHz' && outputUnit === 'Hz') {
    result = input * 1_000_000_000; // Convertir GHz a Hz
  } else if (inputUnit === 'GHz' && outputUnit === 'MHz') {
    result = input * 1000;
  } else if (inputUnit === 'MHz' && outputUnit === 'GHz') {
    result = input / 1000;
  } else if (inputUnit === 'kHz' && outputUnit === 'GHz') {
    result = input * 0.000001;
  } else if (inputUnit === 'GHz' && outputUnit === 'kHz') {
    result = input * 1_000_000;
  } else {
    result = input; // Si las unidades son iguales, no se necesita conversión
  }

    setOutputValue(result);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle className="text-white text-center font-bold bg-gradient-to-r from-blue-500 to-indigo-600 py-4 shadow-lg ">
            Conversión de Frecuencias
          </IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="bg-gradient-to-r from-blue-100 to-indigo-200 min-h-screen flex justify-center items-center p-6 h-full">
        <div className="bg-blue-100 p-6 rounded-b-lg shadow-lg max-w-lg w-full h-full">
          <div className="p-6 bg-white rounded-lg shadow-md w-full max-w-md">
            <h2 className="text-xl font-semibold mb-4 text-gray-700">Conversión de Frecuencias</h2>
            <IonButton onClick={handleOpenInputModal} className="mt-6 bg-blue-600 text-white py-2 px-4 rounded-lg shadow hover:bg-blue-700">Iniciar Conversión</IonButton>
          </div>
        </div>

        {/* Modal de entrada */}
        <IonModal isOpen={showInputModal}>
          <IonHeader>
            <IonToolbar>
              <IonTitle>Ingrese el valor y la unidad</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent className="ion-padding">
            <IonItem>
              <IonLabel position="stacked">Valor</IonLabel>
              <IonInput
                type="number"
                value={inputValue}
                placeholder="Ingrese un valor"
                onIonChange={(e) => setInputValue(e.detail.value!)}
              />
            </IonItem>
            <IonItem>
              <IonLabel position="stacked">Unidad de entrada</IonLabel>
              <IonSelect
                value={inputUnit}
                placeholder="Seleccione unidad"
                onIonChange={(e) => setInputUnit(e.detail.value)}
              >
                <IonSelectOption value="Hz">Hertz (Hz)</IonSelectOption>
                <IonSelectOption value="kHz">Kilohertz (kHz)</IonSelectOption>
                <IonSelectOption value="MHz">Megahercios (MHz)</IonSelectOption>
                <IonSelectOption value="GHz">Gigahercios (GHz)</IonSelectOption>
              </IonSelect>
            </IonItem>
            <IonButton expand="full" onClick={handleInputOk} className="mt-4 bg-blue-600 text-white">OK</IonButton>
            <IonButton expand="full" color="danger" onClick={() => setShowInputModal(false)} className="mt-2">Cancelar</IonButton>
          </IonContent>
        </IonModal>

        {/* Modal de salida */}
        <IonModal isOpen={showOutputModal}>
          <IonHeader>
            <IonToolbar>
              <IonTitle>Seleccione la unidad de salida</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent className="ion-padding">
            <IonItem>
              <IonLabel position="stacked">Unidad de salida</IonLabel>
              <IonSelect
                value={outputUnit}
                placeholder="Seleccione unidad"
                onIonChange={(e) => setOutputUnit(e.detail.value)}
              >
                <IonSelectOption value="Hz">Hertz (Hz)</IonSelectOption>
                <IonSelectOption value="kHz">Kilohertz (kHz)</IonSelectOption>
                <IonSelectOption value="MHz">Megahercios (MHz)</IonSelectOption>
                <IonSelectOption value="GHz">Gigahercios (GHz)</IonSelectOption>
              </IonSelect>
            </IonItem>
            <IonButton expand="full" onClick={handleOutputOk} className="mt-4 bg-blue-600 text-white">OK</IonButton>
            <IonButton expand="full" color="danger" onClick={() => setShowOutputModal(false)} className="mt-2">Cancelar</IonButton>
          </IonContent>
        </IonModal>

        {/* Resultado */}
        {outputValue && (
          <p className="ion-text-center ion-margin-top text-xl text-blue-700 font-semibold">
            Resultado: {inputValue} {inputUnit} = {outputValue} {outputUnit}
          </p>
        )}
      </IonContent>
    </IonPage>
  );
};

export default Tab6;
