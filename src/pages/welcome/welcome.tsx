import React from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/react';
import Button from '@mui/material/Button';
import Tabla from './tabla'; // Importa el componente de la tabla
import Card from './card'; // Importa el componente de la tabla
import Navbar from './navbar'; // Importa el componente de la tabla
import Speeddial from './speeddial'; // Importa el componente de la tabla



const Welcome: React.FC = () => {
  return (
    
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle className="text-center text-lg font-bold text-white">Welcome</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="flex items-center justify-center h-full bg-gray-800"> {/* Cambia el fondo si lo deseas */}
      <Navbar/>
      <Card/>
      <Card/>
      <Speeddial/>
      </IonContent>
    </IonPage>
  );
};

export default Welcome;