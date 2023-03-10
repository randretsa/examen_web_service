import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItemDivider} from '@ionic/react';
import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useHistory, RouteComponentProps } from "react-router-dom";
import { IonGrid, IonRow, IonCol } from '@ionic/react';
import { IonItem, IonLabel, IonAvatar } from '@ionic/react';

interface ResetProps
  extends RouteComponentProps<{
    id: string;
  }> {}

const Dashboard: React.FC<ResetProps> = ({ match }) => {
  const history = useHistory();
  const [users, setUsers] = useState<Array<any>>([]);
  useEffect(() => {
    const api = axios.create({
        baseURL: 'http://'+localStorage.getItem('ip')+':8080'
    })
    api.get("/api/render/file")
        .then(res => {        
            console.log(res);     
            setUsers(res.data);
        })
        .catch(error=>{
            console.error("Error fetching data "+error)
        })
  }, [])
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
  <IonTitle>Dasboard</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding ion-text-center">
        <IonGrid>
          <IonRow>
              <IonCol>
                  {/* <h4>Welcome: {match.params.id}</h4> */}
                  <IonItemDivider></IonItemDivider>
              </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              {users.map((user, i) => {
                return (
                  <IonItem key={i}>
                    <IonAvatar>
                        <img src={"data:image/jpeg;base64,"+user} />
                    </IonAvatar>
                    {/* <IonLabel>
                        <h2 style={{ paddingLeft: "10px" }}>{user.first_name + " " + user.last_name} </h2>
                        <p style={{ paddingLeft: "10px" }}>{user.email}</p>
                    </IonLabel> */}
                  </IonItem>
                );
              })}
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Dashboard;
