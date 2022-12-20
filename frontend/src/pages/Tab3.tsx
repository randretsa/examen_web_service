import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,IonSelect,IonItem,IonLabel,IonSelectOption } from '@ionic/react';
import { useEffect } from 'react';
import './Tab3.css';
import {
  IonGrid,
  IonRow,
  IonCol,
} from '@ionic/react';
import { useState } from 'react';

const Tab3: React.FC = () => {
  var data = {"data":[
    {
        "avion": {
            "id": 0,
            "matricule": null
        },
        "assurance": null,
        "payement": null,
        "expiration": null,
        "montant": 0
    }
]}
  const [items, setItems] = useState(data);
  useEffect(() => {
    
    fetch("http://"+localStorage.getItem('ip')+":8080/assurances/0")
      .then(res => res.json())
      .then(
        (result) => {
          setItems(result);

        },
        (error) => {
          console.log(error);
        }
      )
  }, [])

  var mois = [0,1,2,3,4,5,6,7,8,9,10,11,12];

  function handle_select(el: any){
     
    fetch("http://"+localStorage.getItem('ip')+":8080/assurances/"+el.detail.value!)
      .then(res => res.json())
      .then(
        (result) => {
          setItems(result);

        },
        (error) => {
          console.error(error);
        }
      )
    console.log("mande" + el.detail.value!);
  };

  return (

    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Assurance</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
      <IonItem>
        <IonLabel>Disponibilite</IonLabel>
        <IonSelect placeholder="choisi une duree" onIonChange={(e)=>{handle_select(e)}}>
          {mois.map((value)=>(
            <IonSelectOption value={value}>{value} mois</IonSelectOption>
          ))}
        </IonSelect>
      </IonItem>

      <IonItem>
        <IonGrid>
            <IonRow>
                <IonCol>
                  <b>Matricule</b>
                </IonCol>
                <IonCol>
                  <b>date expiration</b>
                </IonCol>
                <IonCol>
                  <b>montant</b>
                </IonCol>    
            </IonRow>
            {items.data.map((vehicule)=>(
            <IonRow>
              <IonCol>
                {vehicule.avion.matricule}
              </IonCol>
              <IonCol>
                {vehicule.expiration}
              </IonCol>
              <IonCol>
              {vehicule.montant}
              </IonCol>    
            </IonRow>
              ))}
          </IonGrid>
        </IonItem>

      </IonContent>
    
    </IonPage>
  );
};

export default Tab3;
