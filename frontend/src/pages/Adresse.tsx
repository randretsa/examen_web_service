import { IonButton, IonContent, IonHeader, IonInput, IonLabel, IonLoading, IonPage, IonSpinner, IonTitle, IonToolbar } from '@ionic/react';
import React, { useState } from 'react';
import ExploreContainer from '../components/ExploreContainer';

const Adresse: React.FC = () => {
    const [adresse, setAdresse] = useState<string>("");
    const [loading, setLoading] = useState<any>(null);

    const handleLogin = () => {
        localStorage.setItem("ip",adresse);
    }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonLabel position="floating"> Adresse IP Serveur</IonLabel>
        <IonInput
            type="text"
            value={adresse}
            placeholder="xxx.xxx.xxx.xxx"
            onIonChange={(e) => setAdresse(e.detail.value!)}
            >
        </IonInput>


        <IonButton expand="block" onClick={handleLogin}>Login</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Adresse;
