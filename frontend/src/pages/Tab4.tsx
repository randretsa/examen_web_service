import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonPage, IonRow, IonText, IonTitle, IonToolbar } from '@ionic/react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import ExploreContainer from '../components/ExploreContainer';
import { useHistory, RouteComponentProps } from "react-router-dom";
import './Tab4.css';


const Tab3: React.FC = () => {
  const [post, setPost] = useState([]);
  const utf8 = require('utf8');

  useEffect(() => {
    try{
      axios.get("http://"+localStorage.getItem('ip')+":8080/avions").then((data) => {
        setPost(data?.data);
      });
    }
    catch(error) {
    }
    // post=post.toString("utf8");
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 3</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 3</IonTitle>
          </IonToolbar>
        </IonHeader>

          {
            
            post.map(data => {
              
              return (
                <IonRow class='rox'>
                  <IonCard class='card' key={data['id']}>
                    <IonCardHeader >
                      <IonCardTitle><Link to={"/tab2/"+data['id']}>REF{data['id']}</Link></IonCardTitle>
                      <IonCardSubtitle>{data['matricule']}</IonCardSubtitle>
                    </IonCardHeader>
                    <IonCardContent>
                    {decodeURIComponent((data['description']))}
                    </IonCardContent>
                  </IonCard>              
                </IonRow>
                );
            })
          }
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
