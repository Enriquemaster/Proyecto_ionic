import React, { useState } from 'react';
import {IonContent,IonPage,IonButton,IonModal,IonHeader,IonToolbar,IonTitle,IonItem,IonLabel, IonInput, IonSelect,IonSelectOption} from '@ionic/react';


const Tab4: React.FC = () => {
  const [showInputModal, setShowInputModal] = useState(false);
  const [showOutputModal, setShowOutputModal] = useState(false);
  const [inputValue, setInputValue] = useState<number | string>('');
  const [inputUnit, setInputUnit] = useState<string>('L');
  const [outputUnit, setOutputUnit] = useState<string>('mL');
  const [outputValue, setOutputValue] = useState<number | string>('');

  // Abrir primer modal
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

    if (inputUnit === 'L' && outputUnit === 'mL') {
      result = input * 1000;
    } else if (inputUnit === 'mL' && outputUnit === 'L') {
      result = input / 1000;
    } else if (inputUnit === 'L' && outputUnit === 'gal') {
      result = input * 0.264172;
    } else if (inputUnit === 'gal' && outputUnit === 'L') {
      result = input / 0.264172;
    } else if (inputUnit === 'L' && outputUnit === 'fl oz') {
      result = input * 33.814;
    } else if (inputUnit === 'fl oz' && outputUnit === 'L') {
      result = input / 33.814;
    } else if (inputUnit === 'gal' && outputUnit === 'fl oz') {
      result = input * 128;
    } else if (inputUnit === 'fl oz' && outputUnit === 'gal') {
      result = input / 128;
    } else if (inputUnit === 'mL' && outputUnit === 'gal') {
      result = input / 3785.41;
    } else if (inputUnit === 'gal' && outputUnit === 'mL') {
      result = input * 3785.41;
    } else if (inputUnit === 'mL' && outputUnit === 'fl oz') {
      result = input * 0.033814;
    } else if (inputUnit === 'fl oz' && outputUnit === 'mL') {
      result = input * 29.5735;
    } else {
      result = input;
    }

    setOutputValue(result);
  };

  return (
    
    <IonPage>

<IonHeader>
        <IonToolbar>
        <IonTitle className="text-white text-center font-bold bg-gradient-to-r from-blue-500 to-indigo-600 py-4 shadow-lg ">
            Conversión de Unidades de volumen
          </IonTitle>
        </IonToolbar>
      </IonHeader >

      <IonContent className="bg-gradient-to-r from-blue-100 to-indigo-200 min-h-screen flex justify-center items-center p-6 h-full">
      <div className="bg-blue-100 p-6 rounded-b-lg shadow-lg max-w-lg w-full h-full">
          <div className="p-6 bg-white  rounded-lg shadow-md w-full max-w-md">
  <h2 className="text-xl font-semibold mb-4 text-gray-700">Conversiones de Unidades de Volumen</h2>
  <ul className="space-y-2">
    <li className="text-gray-600"><span className="font-bold">1 L</span> = 1000 mL</li>
    <li className="text-gray-600"><span className="font-bold">1 L</span> = 0.264172 gal</li>
    <li className="text-gray-600"><span className="font-bold">1 L</span> = 33.814 fl oz</li>
    <li className="text-gray-600"><span className="font-bold">1 gal</span> = 3.78541 L</li>
    <li className="text-gray-600"><span className="font-bold">1 gal</span> = 128 fl oz</li>
    <li className="text-gray-600"><span className="font-bold">1 mL</span> = 0.033814 fl oz</li>
    </ul>
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
                <IonSelectOption value="L">Litros (L)</IonSelectOption>
                <IonSelectOption value="mL">Mililitros (mL)</IonSelectOption>
                <IonSelectOption value="gal">Galones (gal)</IonSelectOption>
                <IonSelectOption value="fl oz">Onzas líquidas (fl oz)</IonSelectOption>
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
                <IonSelectOption value="L">Litros (L)</IonSelectOption>
                <IonSelectOption value="mL">Mililitros (mL)</IonSelectOption>
                <IonSelectOption value="gal">Galones (gal)</IonSelectOption>
                <IonSelectOption value="fl oz">Onzas líquidas (fl oz)</IonSelectOption>
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

export default Tab4;