import { 
    IonButton,
    IonButtons,
      IonContent, 
      IonHeader, 
      IonIcon, 
      IonItem, 
      IonMenu, 
      IonMenuButton, 
      IonMenuToggle, 
      IonPage, 
      IonRouterOutlet, 
      IonSplitPane, 
      IonTitle, 
      IonToolbar 
  } from '@ionic/react'
  import {homeOutline, informationOutline, logOutOutline, rocketOutline} from 'ionicons/icons';
import { Redirect, Route } from 'react-router';
import Home from './Home';


  const Menu: React.FC = () => {
    const path = [
        {name:'Home', url: '/S.I.K.A.T/app/home', icon: homeOutline},

    ]

    return (
        <IonPage>
            <IonSplitPane contentId="main">
                <IonMenu contentId="main">
                    <IonHeader>
                        <IonToolbar>
                            <IonTitle>
                                Menu
                            </IonTitle>
                        </IonToolbar>
                    </IonHeader>
                    <IonContent>
                        {path.map((item,index) =>(
                            <IonMenuToggle key={index}>
                                <IonItem routerLink={item.url} routerDirection="forward">
                                    <IonIcon icon={item.icon} slot="start"></IonIcon>
                                    {item.name}
                                </IonItem>
                            </IonMenuToggle>
                        ))}

                        {/*Logout Button*/}
                        <IonButton routerLink="/S.I.K.A.T" routerDirection="back" expand="full">
                            <IonIcon icon={logOutOutline} slot="start"> </IonIcon>
                        Logout
                        </IonButton>
                        
                    </IonContent>
                </IonMenu>
                
                <IonRouterOutlet id="main">
                    <Route exact path="/S.I.K.A.T/app/home" component={Home} />

                    <Route exact path="/S.I.K.A.T/app">
                        <Redirect to="/S.I.K.A.T/app/home"/>
                    </Route>
                </IonRouterOutlet>

            </IonSplitPane>
        </IonPage>
    );
  };
  
  export default Menu;