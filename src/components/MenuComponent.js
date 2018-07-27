import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay,
    CardTitle,Breadcrumb,BreadcrumbItem } from 'reactstrap';
import {Link} from 'react-router-dom';
import {  Nav,  NavItem, 
    Button, Modal, ModalHeader, ModalBody,
    Label,Col,Row } from 'reactstrap';
    import {Control,LocalForm} from 'react-redux-form';


class Menu extends Component {
    constructor(props) {
        super(props);
        this.state={
            
            isModalOpen: false,
           
        };
       
        this.toggleModal = this.toggleModal.bind(this);
       
      
    }
    toggleModal() {
        this.setState({
          isModalOpen: !this.state.isModalOpen
        });
      }
      handleSubmit(values) {
        console.log('Current State is: ' + JSON.stringify(values));
       // alert('Current State is: ' + JSON.stringify(values));
       this.props.addProfile(this.props.id, values.name, values.age, values.image,values.height,values.weight,values.location,values.description);
    }
    

    render() {
        const menu = this.props.profile.map((profile) => {
            return (
              <div key={profile.id} className="col-15 col-md-6 m-1">
                 <Card>
                 <Link to={`/menu/${profile.id}`} >
                      <CardImg width="100%" src={profile.image} alt={profile.name} />
                        <CardImgOverlay>
                  
                    <CardTitle>{profile.name}</CardTitle>
                    </CardImgOverlay>
                    </Link>
                </Card>
              </div>
            );
        });

        //const addProfile = this.props.addProfile;
        //const id = this.props.id;

        return (
          <div className="container">
          <div className="row">
          <Breadcrumb>
             <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
             <BreadcrumbItem active>Profile</BreadcrumbItem>
           </Breadcrumb>
           <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <Button outline onClick={this.toggleModal}><span className="fa fa-user-circle-o"></span> Add Profile</Button>
                                </NavItem>
                            </Nav>
                            <div className="col-25 col-md-15">
                            
       <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                    <ModalBody>
          <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                            <Row className="form-group">
                                <Label htmlFor="name" md={2}>Name</Label>
                                <Col md={10}>
                                    <Control.text model=".name" id="name" name="name"
                                        placeholder="Name"
                                        className="form-control"
                                         />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="age" md={2}>Age</Label>
                                <Col md={10}>
                                    <Control.text model=".age" id="age" name="age"
                                        placeholder="Age"
                                        className="form-control"
                                         />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="image" md={2}>Image Link</Label>
                                <Col md={10}>
                                    <Control.text model=".image" id="image" name="image"
                                        placeholder="Image Link"
                                        className="form-control"
                                         />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="height" md={2}>Height</Label>
                                <Col md={10}>
                                    <Control.text model=".height" id="height" name="height"
                                        placeholder="Height"
                                        className="form-control" />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="weight" md={2}>Weight</Label>
                                <Col md={10}>
                                    <Control.text model=".weight" id="weight" name="weight"
                                        placeholder="Weight"
                                        className="form-control" />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="location" md={2}>Location</Label>
                                <Col md={10}>
                                    <Control.text model=".location" id="location" name="location"
                                        placeholder="Location"
                                        className="form-control" />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="description" md={8}>Description</Label>
                                <Col md={10}>
                                    <Control.text model=".description" id="description" name="description"
                                        placeholder="Description"
                                        className="form-control" />
                                </Col>
                            </Row>
                            
                            <Row className="form-group">
                                <Col md={{size:10, offset: 2}}>
                                    <Button type="submit" color="primary">
                                    Add Profile                                  
                                      </Button>
                                </Col>
                            </Row>
                        </LocalForm >
                        </ModalBody>
                        </Modal>
                    </div>


           <div className="col-12">
              <h3>Profiles</h3>
              <hr/>
              </div>
          </div>
            <div className="row">
                {menu}
              </div>
              
          </div>
        );
    }
}

export default Menu;
