import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';
import { useHistory } from 'react-router-dom';

const WelcomePage: React.FC = () => {
  const history = useHistory();

  return (
    <IonPage className="flex flex-col items-center bg-white justify-center bg-card rounded-lg shadow-lg max-w-sm mx-auto">
      <IonHeader>
        <IonToolbar>
          <IonTitle className="text-white text-center font-bold bg-gradient-to-r from-blue-500 to-indigo-600 shadow-lg mb-4">
            Aplicación de conversión
          </IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-lg max-w-sm mx-auto text-black mb-4">
        <div className="flex justify-center mb-4 mt-4 ">
          <div className="w-16 h-16 bg-zinc-300 rounded-full flex items-center justify-center ">
            <div className="w-10 h-10 bg-blue-500 rounded-full"></div>
          </div>
        </div>
        <h2 className="text-xl font-semibold text-foreground mb-2 px-4">
          ¡Bienvenido a mi app de conversión!
        </h2>
        <p className="text-muted-foreground mb-4 px-4">
          Convierte fácilmente entre diferentes unidades de peso, longitud, volumen, velocidad y mucho más. ¡Selecciona una categoría para comenzar!
        </p>
        <IonButton
          expand="block"
          className="w-3/4 mx-auto text-white font-medium py-3 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out"
          onClick={() => history.push('/tab1')}
        >
          Comenzar
        </IonButton>

        {/* Mensajes de categorías */}
        <div className="mt-6 ">
          <h3 className="text-lg font-semibold text-gray-800 px-4">Categorías disponibles:</h3>
          <ul className="list-disc list-inside text-gray-600 px-4 mt-2">
            <li>Peso: Convierte entre kilogramos, libras, gramos, y más.</li>
            <li>Longitud: Convierte entre metros, kilómetros, millas, pies, etc.</li>
            <li>Volumen: Convierte entre litros, mililitros, galones, onzas líquidas.</li>
            <li>Velocidad: Convierte entre kilómetros por hora, millas por hora, etc.</li>
          </ul>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default WelcomePage;