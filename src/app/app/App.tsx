import { IonApp, IonRouterOutlet, IonSplitPane, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import Menu from '../menu/Menu';
import Logout from '../logout/Logout';
import CustomerLogin from '../../customer/login/CustomerLogin'
import CustomerHome  from '../../customer/home/CustomerHome';
import CleanerLogin  from '../../cleaner/login/CleanerLogin';
import CleanerHome from '../../cleaner/home/CleanerHome';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import '../../styles/variables.css';
import '../../styles/global.css';
import '../../styles/dev.css';

setupIonicReact();

const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonSplitPane contentId="main">
          <Menu />
          <IonRouterOutlet id="main">
            <Route path="/" exact={true}>
              <Redirect to="/customer/login" />
            </Route>
            <Route path="/customer/login" exact={true}>
              <CustomerLogin />
            </Route>
            <Route path="/cleaner/login" exact={true}>
              <CleanerLogin />
            </Route>
            <Route path="/customer/home" exact={true}>
              <CustomerHome />
            </Route>
            <Route path="/cleaner/home" exact={true}>
              <CleanerHome />
            </Route>
            <Route path="/logout" exact={true}>
              <Logout />
            </Route>
          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
