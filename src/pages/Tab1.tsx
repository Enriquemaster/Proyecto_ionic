import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';

const Tab1: React.FC = () => {
  return (
    
    <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle className="text-center text-lg font-bold text-white">Dashboard</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent className="flex items-center justify-center h-full bg-gray-800"> {/* Cambia el fondo si lo deseas */}
    </IonContent>
  </IonPage>
);
};


export default Tab1;
