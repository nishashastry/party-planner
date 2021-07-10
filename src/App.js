import React, { Component } from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import EventDashboard from "./EventDashboard/EventDashboard";
import GuestList from "./GuestList/GuestList.js";
import CreateNewEvent from "./CreateNewEvent/CreateNewEvent.js";
import ChooseEventType from "./ChooseEventType/ChooseEventType.js";
import VirtualPlatform from "./VirtualPlatform/VirtualPlatform.js";
import VirtualChoose from "./VirtualChoose/VirtualChoose.js";
import IPChoose from "./IPChoose/IPChoose.js";
import IPhowmany from "./IPhowmany/IPhowmany.js";
import IPFoodChoose from "./IPFoodChoose/IPFoodChoose.js";
import VirtualActivityDiagnostic from "./VirtualActivityDiagnostic/VirtualActivityDiagnostic.js";
import NewGuest from "./NewGuest/NewGuest.js";
import IPActivityDiagnostic from "./IPActivityDiagnostic/IPActivityDiagnostic.js";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path="/" exact component={EventDashboard} />
          <Route path="/guestlist" exact component={GuestList} />
          <Route path="/createnewevent" exact component={CreateNewEvent} />
          <Route path="/chooseeventtype" exact component={ChooseEventType} />
          <Route path="/virtualplatform" exact component={VirtualPlatform} />
          <Route path="/virtualchoose" exact component={VirtualChoose} />
          <Route path="/ipchoose" exact component={IPChoose} />
          <Route path="/iphowmany" exact component={IPhowmany} />
          <Route path="/ipfoodchoose" exact component={IPFoodChoose} />
          <Route path="/newguest" exact component={NewGuest} />
          <Route
            path="/ipactivitydiagnostic"
            exact
            component={IPActivityDiagnostic}
          />
          <Route
            path="/virtualactivitydiagnostic"
            exact
            component={VirtualActivityDiagnostic}
          />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
