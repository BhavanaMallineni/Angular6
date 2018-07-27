import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import {Profiles} from '../shared/profiles';
import { addProfile } from '../redux/ActionCreators';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import ProfileDetail from './ProfileDetail';
import {Switch,Route,Redirect,withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
const mapStateToProps = state => {
    return {
   profiles: state.profiles
    }
  }


const mapDispatchToProps = dispatch => ({
   addProfile: (id,name,age,image,height,weight,location,description)=>dispatch(addProfile(id,name,age,
    image,height,weight,location,description))
});

class Main extends Component {
  constructor(props){
    super(props);
    this.state={
     
    
  };
}
 





  render() {
    const HomePage = () => {
        return(
            <Home/>
        );
    }


   const ProfileWithId =({match})=> {
     return (
         <ProfileDetail profile={this.props.profiles.filter((profile)=>profile.id===parseInt(match.params.profileId,10))[0]}
         addProfile = {this.props.addProfile}
         />
        );
   };



    return (
      <div className="App">
      
      <div>
        <Header/>
      <Switch>
          <Route path="/home" component={HomePage}/>
          <Route exact path="/menu" component={()=> <Menu profile={this.props.profiles}
             addProfile = {this.props.addProfile}/>}/>
          <Route path="/menu/:profileId" component={ProfileWithId}/>
          <Route path="/aboutus" component={About}/>
          <Route path="/contactus" component={Contact}/>
          <Redirect to="/home" />
          </Switch>
        <Footer/>
        </div>
    </div>
      
    );
  }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Main));
