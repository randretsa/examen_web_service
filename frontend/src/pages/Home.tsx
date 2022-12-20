import { IonButton, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import axios from 'axios';
import React, { useRef, useState } from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

const Home: React.FC = () => {
  
  const file = useRef(null);
  const[img,setImg]=useState<any>();
  const[hiden,setHidden]=useState<any>("");
  const setImage = (_event: any) => {
    setImg(_event.target.files[0]);
  }
  const handleLogin = async() => {
    const formData = new FormData();
    // formData=;
    alert(hiden);
    var filo=new File([img],hiden+".jpg");
    formData.append("File", filo);
    // console.log("   "+img.name);
    console.log(filo);
    try { 
      const api = await axios.create({
        baseURL: 'http://'+localStorage.getItem('ip')+':8080'
      });
      api.post('/api/upload/file', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
    } catch(error) {
      console.error(error)
    }
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
        <IonLabel position="floating"> Email</IonLabel>
          <IonInput
                class="hide"
                type="text"
                value="6"
                onIonInput={(e:any)=>setHidden(e.target.value!)}
                />
          <IonItem>
            <input ref={file}
              type="file"
              name="File"
              accept="image/*"
              onChange={setImage}
              onClick={() => {
                console.log('onClick');
              }} />
          </IonItem>
        <IonButton expand="block" onClick={handleLogin}>Login</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Home;
