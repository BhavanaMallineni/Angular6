import {React,Component} from 'react';
import {Media} from 'reactstrap';


class Menu extends Component{
    constructor(props){
        super(props);

        this.state={
            profiles: [
               { id: 0,
                name: 'XYZ',
                image:'assets/images/uthappizza.png',
                gender: 'F',
                height: '5.5"',
                weight: '57kg',
                description: 'Working at Tata consultancy services'
                 },
                 { id: 1,
                    name: 'ABC',
                    image:'assets/images/zucchipakoda.png',
                    gender: 'M',
                    height: '5.10"',
                    weight: '77kg',
                    description: 'Working at Infosys'
                     }
            ]
        
        }
    }
    render(){
        const menu = this.state.profiles.map((profile)=> {
        return(
            <div key={profile.id} className="col-12 mt-5">
            <Media tag="li">
               <Media left middle>
               <Media object src={profile.image} alt={profile.name}/>
               </Media>
               <Media body className="ml-5">
               <Media heading>{profile.name}</Media>
             <p>{profile.description}</p>
             </Media>
            </Media>
            </div>
        );
    });
        return(
         <div className="container">
            <div className="row">
           <Media list>
                {menu}
           </Media>
            </div>
         </div>
        );
    }
}
export default Menu;