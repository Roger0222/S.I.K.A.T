import { 
    IonButton,
      IonButtons,
        IonContent, 
        IonHeader, 
        IonIcon, 
        IonLabel, 
        IonMenuButton, 
        IonPage, 
        IonRouterOutlet, 
        IonTabBar, 
        IonTabButton, 
        IonTabs, 
        IonTitle, 
        IonToolbar 
    } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Route, Redirect } from 'react-router';
import Dashboard from './tabs/Dashboard';
import Sensors from './tabs/Sensors';
import Reports from './tabs/Reports';
import { bookOutline, search, star } from 'ionicons/icons';
    
    const Home: React.FC = () => {
       const tabs=[
        {name:'Dashboard',tab:'dashboard',url:'/S.I.K.A.T/app/home/dashboard',icon:bookOutline},
        {name:'Sensors',tab:'sensors',url:'/S.I.K.A.T/app/home/sensors',icon:search},
        {name:'Reports',tab:'reports',url:'/S.I.K.A.T/app/home/reports',icon:star}
       ]
      return (
        <IonReactRouter>
          <IonTabs>
            <IonTabBar slot="bottom">
            {tabs.map((item, index) => (
              <IonTabButton key={index} tab={item.tab} href={item.url}>
                <IonIcon icon={item.icon} />
                <IonLabel>{item.name}</IonLabel>
              </IonTabButton>
            ))}

            </IonTabBar>
            <IonRouterOutlet>
              <Route exact path="/S.I.K.A.T/app/home/dashboard" component={Dashboard}/>
              <Route exact path="/S.I.K.A.T/app/home/sensors" component={Sensors}/>
              <Route exact path="/S.I.K.A.T/app/home/reports" component={Reports}/>
              <Route exact path="/S.I.K.A.T/app/home">
                <Redirect to="/S.I.K.A.T/app/home/dashboard"/>
              </Route>
            </IonRouterOutlet>
          </IonTabs>
        </IonReactRouter>
      );
    };
    
    export default Home;