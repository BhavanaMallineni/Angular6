import React, {Component} from 'react';
import './ProfileDetail.css';
import { Card, CardImg, CardText, CardBody, CardTitle , Modal, ModalHeader, ModalBody,
    Form, CardImgOverlay} from 'reactstrap';
    import {Control} from 'react-redux-form';
import {Link} from 'react-router-dom';
import {Breadcrumb,BreadcrumbItem, Button,Nav,NavItem,Label,Row,Col} from 'reactstrap';
import {LocalForm} from 'react-redux-form';
class ProfileDetail extends Component{
    constructor(props){
        super(props);
        this.state={
            isModalOpen: false
        };
        this.toggleModal = this.toggleModal.bind(this);
    }
     toggleModal(){
         this.setState({
             isModalOpen: !this.state.isModalOpen
         });
     }
    handleInterest() {
        
        alert('Interest is expressed');
        
    }


renderProfile(profile) {
   
        return(
            <div className="col-12 col-md-5 m-1">
            <Card>
                <CardImg  top width="100%" height="100%" src={profile.image} alt={profile.name} />
                
                <CardBody>
                  <CardTitle>{profile.name}</CardTitle>
                   <CardText> Age: {profile.age}</CardText>
                   <CardText> Height: {profile.height}</CardText>
                   <CardText> Weight: {profile.weight}</CardText>
                   <CardText> Location: {profile.location}</CardText>
                  <CardText>{profile.description}</CardText>
                </CardBody>
          
            </Card>
            </div>
        );
  
}
render(){
    if(this.props.profile!=null)
    return(
        <div className = "container">
        <div className="row">
          <Breadcrumb>
            
             <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
             <BreadcrumbItem active>{this.props.profile.name}</BreadcrumbItem>
           </Breadcrumb>
           <div className="col-12">
              <h3>{this.props.profile.name}</h3>
              <hr/>
              </div>
           </div>
        <div className="row">
        {this.renderProfile(this.props.profile)}
        </div>
          
               
           <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <Button outline onClick={this.toggleModal} ><span className="fa fa-thumbs-up"></span> Express Interest</Button>
                                </NavItem>
                            </Nav>
                            
        
          <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Express Interest</ModalHeader>
                    <ModalBody>
                       
                    <Form onSubmit={this.handleInterest}>
                    <Row className="form-group">
                                <Label htmlFor="message" md={2}>Your Feedback</Label>
                                <Col md={10}>
                                    <Control.textarea model=".message" id="message" name="message"
                                        rows="12"
                                        className="form-control" />
                                </Col>
                            </Row>

                    <Button type="submit" value="submit" color="primary">Express Interest</Button>
                        </Form>
                    </ModalBody>
                </Modal>
        </div>
    );
    else
    return(
        <div>
            </div>
    );
}
}

export default ProfileDetail;