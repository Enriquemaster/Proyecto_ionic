// src/pages/Tab2.tsx
import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

const welcomee: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Conversión de Unidades</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        {/* Información de la conversión */}
        <div className="mt-4 p-4 bg-gray-100 rounded-md text-gray-700">
          <h3 className="font-semibold text-lg">CONVERSIÓN</h3>
          <p className="text-gray-600">
            1 kg = 1000 g<br />
            1 kg = 2.20462 lb<br />
            1 kg = 35.274 oz<br />
            1 lb = 453.592 g<br />
            1 lb = 16 oz<br />
            1 oz = 28.3495 g
          </p>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default welcomee;