import React, { Fragment } from 'react';
import { BrowserRouter as Router,NavLink, Switch, Route } from "react-router-dom";
import Main from './Home/Home';
import About from './About/About';
import Review from './Review/Review';
import Gallery from './Gallery/Gallery';
import Download from './About/About';
import { AuthProvider } from './Login/contexts/AuthContext';
import Dashboard from './Login/components/Dashboard';
import DashboardPhone from './Login/components/Dashboard_Phone';
import UpdateProfile from './Login/components/UpdateProfile';
import Signup from './Login/components/Signup';
import LoginViaEmail from './Login/components/LoginViaEmail';
import LoginViaPhone from './Login/components/LoginViaPhone';
import LoginViaGoogle from './Login/components/LoginViaGoogle';
import PrivateRoute from './Login/components/PrivateRoute';
import ForgotPassword from './Login/components/ForgotPassword'




const sections = () => {
  return (
            <Switch>
              <Route exact path="/home" component={Main} />
	            <Route exact path="/" component={Main}/>
              <Route exact path="/about" component={About} />
              <Route exact path="/review" component={Review} />
              <Route exact path="/gallery" component={Gallery} />
              <Route exact path="/download" component={Download} />
              <AuthProvider>
                <Switch>
              <PrivateRoute path="/dashboard" component={Dashboard} />
	      <PrivateRoute path="/dashboardPhone" component={DashboardPhone} />
              <PrivateRoute path="/update-profile" component={UpdateProfile} />
              <Route path="/signup" component={Signup} />
              <Route path="/loginViaEmail" component={LoginViaEmail} />
              <Route path="/loginViaPhone" component={LoginViaPhone} />
              <Route path="/loginViaGoogle" component={LoginViaGoogle} />
              <Route path="/Login" component={LoginViaPhone} />
              <Route path="/forgot-password" component={ForgotPassword} />
                </Switch>
              </AuthProvider>
            </Switch>
  );
};

export default sections;
