import { IonButton, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonInput, IonItem, IonPage, IonRow, IonText, IonTitle, IonToolbar, useIonViewWillEnter } from '@ionic/react';
import axios from 'axios';
import { JSXElementConstructor, ReactElement, ReactFragment, ReactPortal, useEffect, useRef, useState } from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';
import { useParams } from "react-router-dom";
import { getElement } from 'ionicons/dist/types/stencil-public-runtime';

const Tab2: React.FC = () => {
  const [post, setPost] = useState<any>();
  const file = useRef(null);

  const  id  = (useParams());
  const ar=JSON.parse(JSON.stringify(id));
  const[img,setImg]=useState<any>();
  const[hiden,setHidden]=useState<any>("");
  const setImage = (_event: any) => {
    setImg(_event.target.files[0]);
  }
  if(!localStorage.getItem('token')){
    window.location.href='/';
  }
  const handleLogin = async() => {
    const formData = new FormData();
    // formData=;
    var tag=document.getElementById('xal')?.innerHTML;
    alert((tag));
    var filo=new File([img],tag+".jpg");
    formData.append("File", filo);
    // console.log("   "+img.name);
    console.log(filo);
    try { 
      const api = await axios.create({
        baseURL: "http://"+localStorage.getItem('ip')+":8080"
      });
      api.post('/api/upload/file', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
    } catch(error) {
      console.error(error);
    }
  }
  useEffect(() => {
    const getData = async () => {
    
      await axios.get(
        "http://"+localStorage.getItem('ip')+":8080/avions/"+ar.id
      ).then(async(res:any) => {
        setPost(res?.data);
      });
    };
    getData();
  });
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 2</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 2</IonTitle>
          </IonToolbar>
        </IonHeader>

              {/* {
                (JSON.stringify(post))              
              } */}
          <IonCard>
            <div className="rox">
                  <IonItem>Avion Matricule {post?.matricule}</IonItem>
                  <img  className='full-image' src={"data:image/jpeg;base64,"+post?.image} />
                <div className="col-33">
                  <IonItem>Marque {post?.marque}</IonItem>
                  <IonItem>Annee de sortie {post?.annee}</IonItem>
                  <IonItem>
                    Changer La photo
                  </IonItem>
                  <IonItem class="hide" id="xal">{(post?.id)}</IonItem>
                  <IonItem>
                    <input ref={file}
                      type="file"
                      name="File"
                      accept="image/*"
                      onChange={setImage}
                      onClick={() => {
                        console.log('onClick');
                      }} />
                    <IonButton class="size" expand="block" onClick={handleLogin}>Changer</IonButton>
                  </IonItem>
              </div>
            </div>
          </IonCard>
          <IonTitle>
              Detail kilometrage
          </IonTitle>    <br></br>
        <IonGrid>
          <IonRow>
              <IonCol>Dates</IonCol>
              <IonCol>Debut</IonCol>
              <IonCol>Fin</IonCol>
          </IonRow>
          {

            post?.dates?.map((data:any,i:any) => {
              
              return (
                <IonRow key={i}>
                  {/* <IonCol>{data}</IonCol> */}
                  <IonCol>{post?.dates[i]}</IonCol>
                  <IonCol>{post?.debut[i]}</IonCol>
                  <IonCol>{post?.fin[i]}</IonCol>
                </IonRow>
              );
            })
          }
          </IonGrid>

      </IonContent>
    </IonPage>
  );
};

export default Tab2;
