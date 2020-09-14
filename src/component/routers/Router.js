import React from "react";
import Office from "@src/component/StepComponent/Office/Office";
import OfficeSetting from "@src/component/StepComponent/OfficeSetting/OfficeSetting";
import AdminSetting from "@src/component/StepComponent/AdminSetting/AdminSetting";
import CameraSetting from "@src/component/StepComponent/CameraSetting/CameraSetting";
import PermissionSetting from "@src/component/StepComponent/PermissionSetting/PermissionSetting";
import ScreenConfigSetting from "@src/component/StepComponent/ScreenConfigSetting/ScreenConfigSetting";
import User from "@src/component/StepComponent/User/User";


import DetailOffice from "@src/component/StepComponent/Office/DetailOffice/DetailOffice";
import Dashboard from "@src/component/StepComponent/Office/DetailOffice/Dashboard";
import { Switch, Route, Redirect } from "react-router-dom";
import DetectError from "@src/component/StepComponent/Office/DetailOffice/DetectError";
import Abnormal from "@src/component/StepComponent/Office/DetailOffice/Abnormal";
import WarningHistory from "@src/component/StepComponent/Office/DetailOffice/ReportHistory";
import ReportHistoryOffice from "@src/component/StepComponent/Office/DetailOffice/WarningSysHistory";
import EditPermission from "@src/component/StepComponent/PermissionSetting/EditPermisstion";
import WarningSetting from "@src/component/StepComponent/Office/DetailOffice/WarningSetting";
import DetailOfficeSetting from "@src/component/StepComponent/Office/DetailOffice/DetailOfficeSetting";
function RouterRoot() {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="/detail-office/dashboard/1" />
      </Route>
      <Route exact path="/office" component={Office} />
      <Route exact path="/detail-office" children={<DetailOffice />} />
      <Route exact path="/detail-office/dashboard/1" children={<Dashboard />} />
      <Route exact path="/detail-office/detect-error/1" children={<DetectError />} />
      <Route exact path="/detail-office/abnormal/1" children={<Abnormal />} />
      <Route
        exact
        path="/detail-office/warning-history/1"
        children={<WarningHistory />}
      />
      <Route
        exact
        path="/detail-office/system-warning-history/1"
        children={<ReportHistoryOffice />}
      />
      <Route
        exact
        path="/detail-office/warning-setting/1"
        children={<WarningSetting />}
      />
      <Route
        exact
        path="/detail-office/office-detail-setting/1"
        children={<DetailOfficeSetting />}
      />
      <Route exact path="/office-setting" component={OfficeSetting} />
      <Route exact path="/admin-setting" component={AdminSetting} />
      <Route exact path="/camera-setting" component={CameraSetting} />
      <Route exact path="/permission" component={PermissionSetting} />
      <Route exact path="/permission/edit" component={EditPermission} />
      <Route
        exact
        path="/screen-config-setting"
        component={ScreenConfigSetting}
      />
      <Route exact path="/user" component={User} />
      <Route path="**">
        <Redirect to="/404" />
      </Route>
    </Switch>
  );
}

export default RouterRoot;
