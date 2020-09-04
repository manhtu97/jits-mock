import React from "react";
import "./App.css";
import Header from "@src/component/header/header";
import Home from "@src/component/home/home";
import Office from "@src/component/StepComponent/Office/Office";
import OfficeSetting from "@src/component/StepComponent/OfficeSetting/OfficeSetting";
import AdminSetting from "@src/component/StepComponent/AdminSetting/AdminSetting";
import CameraSetting from "@src/component/StepComponent/CameraSetting/CameraSetting";
import PermissionSetting from "@src/component/StepComponent/PermissionSetting/PermissionSetting";
import ScreenConfigSetting from "@src/component/StepComponent/ScreenConfigSetting/ScreenConfigSetting";
// import ReportHistory from "@src/component/StepComponent/ReportHistory/ReportHistory";
// import ReportSetting from "@src/component/StepComponent/ReportSetting/ReportSetting";
import User from "@src/component/StepComponent/User/User";

import DetailOffice from "@src/component/StepComponent/Office/DetailOffice/DetailOffice";
import Dashboard from '@src/component/StepComponent/Office/DetailOffice/Dashboard';
import { Switch, Route, Redirect } from "react-router-dom";
import DetectError from "./component/StepComponent/Office/DetailOffice/DetectError";
import Abnormal from "./component/StepComponent/Office/DetailOffice/Abnormal";
import WarningHistory from "./component/StepComponent/Office/DetailOffice/WarningSysHistory";
import ReportHistoryOffice from "./component/StepComponent/Office/DetailOffice/ReportHistory";
import EditPermission from "./component/StepComponent/PermissionSetting/EditPermisstion";
import WarningSetting from "./component/StepComponent/Office/DetailOffice/WarningSetting";
function App() {
  return (
    <div className="App">
      <Header />
        <Switch>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route exact path="/home" component={Home} />
          <Route exact path="/office" component={Office} />
          <Route exact path="/office/:id" children={<DetailOffice />} />
          <Route exact path="/office/:id/dashboard" children={<Dashboard />} />
          <Route exact path="/office/:id/detect-error" children={<DetectError />} />
          <Route exact path="/office/:id/abnormal" children={<Abnormal />}  />
          <Route exact path="/office/:id/warning-history" children={<WarningHistory />} />
          <Route exact path="/office/:id/report-history" children={<ReportHistoryOffice />} />
          <Route exact path="/office/:id/warning-setting" children={<WarningSetting />} />
          <Route exact path="/office-setting" component={OfficeSetting} />
          <Route exact path="/admin-setting" component={AdminSetting} />
          <Route exact path="/camera-setting" component={CameraSetting} />
          <Route exact path="/permission" component={PermissionSetting} />
          <Route exact path="/permission/edit" component={EditPermission} />
          <Route exact path="/screen-config-setting" component={ScreenConfigSetting} />
          {/* <Route exact path="/report-history" component={ReportHistory} />
          <Route exact path="/report-setting" component={ReportSetting} /> */}
          <Route exact path="/user" component={User} />
          <Route path="*">
            <Redirect to="/404" />
          </Route>
        </Switch>
    </div>
  );
}


export default App;
