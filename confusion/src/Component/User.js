import  React ,{Component ,useState} from 'react';
import { ListGroup ,Modal, ModalBody, ModalHeader, ModalFooter,ListGroupItem, Button } from 'reactstrap';



class User extends Component{

   constructor(props)
   {
       super(props);

       this.state = {
            loading : true,
            user : null,
            isModalOpen: false  ,
            render :null
            
       };
       this.toggleModal = this.toggleModal.bind(this);
       this.componentDidMount = this.componentDidMount.bind(this);
       this.handleClick = this.handleClick.bind(this);
   } 
   toggleModal()
   {
       this.setState({isModalOpen:!this.state.isModalOpen 
       });
   }
   handleClick(compName){
    
    const data  = this.state.user;
    const el= data.find(el => el.id === compName);
    
   

    this.setState({ render:el,
                    isModalOpen : !this.state.isModalOpen} ); 

   

    
    }
 

   componentDidMount()
   { 
     const baseUrl = 'http://localhost:3001/members';
     fetch(baseUrl)
        .then(res => res.json())
        .then(json => {
            this.setState({loading:false , user: json});
        })

   }

render(){
   
   if(this.state.loading)
    {
        return(<div>loading .....</div>);
    } 
    if(!this.state.user)
    {
        return(<div>Person not Found</div>);
    }
    const member = this.state.user; 
    
    //console.log(member);


    if(this.state.render!=null)
    {
    const m = this.state.render.activity_periods;
    return(
    
     //  <React.Fragment>
          
        
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
        <ModalHeader toggle={this.toggleModal}>
           <h4 className="text-success"> Details of {this.state.render.real_name}</h4>
        </ModalHeader>
        <ModalBody>
            <h5 className="text-primary">   Personal Details</h5>
            Full Name : {this.state.render.real_name}<br/>

            ID : {this.state.render.id}<br/>

            City : {this.state.render.tz}<br/><br/>
           
           <h5 className="text-primary"> Start and End Time</h5>
           {m.map(item=>(
           <ul key={item.id}>
              
               <li>{item.start_time}</li> 
            
               <li>{item.end_time}</li>
           </ul>
           ))
            }
        </ModalBody>
        </Modal> 
        
        );
        }
        if(this.state.render==null)
        return(
        member.map(item =>(
                <React.Fragment>
                <ListGroup key={item.id}>
                     <ListGroupItem onClick={this.toggleModal}>{item.real_name}</ListGroupItem>
                </ListGroup>
                 <Button color="primary" outline onClick={() => this.handleClick(item.id)}>      
                    CLick Here For More Details
                 </Button>    
                 </React.Fragment>
       )) 
        
        //</React.Fragment>
         );
        

}

}

export default User;