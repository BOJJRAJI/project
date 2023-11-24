import {Component} from 'react'
import {Link} from 'react-router-dom'
import Popup from 'reactjs-popup'
import { TiTick} from "react-icons/ti";
import { AiFillApple,AiFillFacebook} from "react-icons/ai";
import {BsAndroid2,BsClock,BsPersonFill,BsInstagram} from "react-icons/bs"
import {MdLocationPin,MdCancel,MdPhoneEnabled} from "react-icons/md"
import {HiMail} from "react-icons/hi"
import './index.css'

class Home extends Component{
    state ={name:'',email:'',message:'',phone:'',contactError:'',showFormError:false}

    getName=e=>{
        this.setState({name:e.target.value})
    }

    getMessage=e=>{
        this.setState({message:e.target.value})
    }

    getEmail=e=>{
        this.setState({email:e.target.value})
    }

    getPhone=e=>{
        this.setState({phone:e.target.value})
    }

    sendMessage=e=>{
       e.preventDefault()
       const {message,name,email,phone,contactError}=this.state
       const phonelen=phone.length;
       
       if(name=='') {
        this.setState({showFormError:true,contactError:'Enter Your Name!'})
       }
       else if(email==''){
        this.setState({showFormError:true,contactError:'Enter Your Email!'})
       }
       else if(phone=='' || phone.length!=10){
        this.setState({showFormError:true,contactError:'Enter Your phone Number Correctly!'})
       }
       else if(message==''){
        this.setState({showFormError:true,contactError:'Enter Your Query!'})
       }
       else{
        const user={
            message,name,email,phone
           }
           console.log(user)
           this.setState({name:'',email:'',message:'',phone:'',contactError:'',showFormError:false})
       }

       
    }




    render(){
        const {message,name,email,phone,contactError,showFormError}=this.state
        
        return(
            <div >
               <nav class="navbar navbar-expand-lg navbar-light bg-white fixed-top">
                 <div class="container">
                   <a class="navbar-brand" href="#">
                   <img
                    src="https://bno-restaurant-images.imgix.net/b00011ff-eae3-4a02-b764-f659125891f6.png?lossless=1"
                    alt="logo"
                    className="food-munch-logo"
                    />
                    </a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                       <div className="navbar-nav ml-auto">
                          <a className="nav-link active" id="navItem1" href="#sectionAboutUs">
                            About Us
                          <span className="sr-only">(current)</span>
                          </a>
                          <a className="nav-link" href="#sectionLocation" id="navItem2">Location</a>
                          <a className="nav-link" href="#sectionContactUs" id="navItem3">Contact Us</a>
                          <Link to='/orderPage'><button className='order-online-button' type='button'>Order Online</button></Link>
                    </div>
                    </div>
                   </div>
                </nav>

                <div className='banner-section'>
                    <h1 className='banner-heading'>Pizza Boyz</h1>
                    <p className='banner-text'>your local serving top quality pizzas</p>
                </div>
                
                 
                <div className='about-us-bg-container' id='sectionAboutUs'>
                <div className='about-us-container'>
                    <div className='line-conianer'>
                        <hr className='line'/>
                    </div>
                    <h1 className='about-us-heading'>About Us</h1>
                    <p className='about-us-para'>
                    Pizza Boyz located in Glen Eden, serve the best tasting Pizzas out West Auckland. 
                    We use only the best quality ingredients to make our fresh, tasty pizza, 
                    with an extensive menu that will have something to suit everyone's taste and budget. 
                    Pizza Boyz invite you to order online for your convenience with option of takeaway pickup 
                    or delivery to your door. Pizza Boyz look forward to serving you your delicious pizzas soon to 
                    satisfy those pizza cravings!!
                    </p>
                    <ul className='about-us-options-container'>
                        <li className='about-us-option'>
                           <TiTick className='tick-icon' size={16}/>
                           <h1 className='about-us-option-name'>PICKUP</h1>
                        </li>
                        <li className='about-us-option'>
                           <TiTick className='tick-icon' size={16}/>
                           <h1 className='about-us-option-name'>DELIVERY</h1>
                        </li>
                        <li className='about-us-option'>
                           <TiTick className='tick-icon' size={16}/>
                           <h1 className='about-us-option-name'>TAKEAWAY</h1>
                        </li>
                        <li className='about-us-option'>
                           <TiTick className='tick-icon' size={16}/>
                           <h1 className='about-us-option-name'>FRESH INGREDIENTS</h1>
                        </li>
                        <li className='about-us-option'>
                           <TiTick className='tick-icon' size={16}/>
                           <h1 className='about-us-option-name'>QUALITY PIZZA</h1>
                        </li>
                        <li className='about-us-option'>
                           <TiTick className='tick-icon' size={16}/>
                           <h1 className='about-us-option-name'>EXCEPTIONAL SERVICE</h1>
                        </li>
                    </ul>
                </div>
                </div>

                <div className='app-install-container'>
                    <div className='install-container'>
                        <div className='app-install-heading-container'>
                           <p className='install-app-heading'>Install our app and make your ordering experience better</p>                      
                        </div>
                        <div className='install-icons-button-container'>
                            <div className='install-icons-container'>
                                 <BsAndroid2 size={28} className='app-icon'/>
                                 <AiFillApple size={28} className='app-icon'/>
                            </div>
                            <button className='install-button'>INSTALL</button>
                        </div>
                    </div>
                </div>

                <div className='images-bg-container'>
                    <div className='images-container'>
                        <img src='https://bno-restaurant-images.imgix.net/1b193fa4-130c-4484-b42d-0b79b45607f4.jpg?fm=jpg&h=275&fit=clip&lossless=1' alt='image' className='item-image'/>
                        <img src='https://bno-restaurant-images.imgix.net/1a57eca6-c377-48a2-85fb-fc153a67cbde.jpg?fm=jpg&h=275&fit=clip&lossless=1' alt='image' className='item-image'/>
                        <img src='https://bno-restaurant-images.imgix.net/978eaeb7-02f1-46f4-b1f9-112ac947de1e.jpeg?fm=jpg&h=275&fit=clip&lossless=1' alt='image' className='item-image'/>
                        <img src='https://bno-restaurant-images.imgix.net/6814990b-ef08-49ba-802f-6ee1c0a0e782.jpeg?fm=jpg&h=275&fit=clip&lossless=1' alt='image' className='item-image'/>
                        <img src='https://bno-restaurant-images.imgix.net/2c59617e-bccc-435b-8b6f-3770650b0003.jpg?fm=jpg&h=275&fit=clip&lossless=1' alt='image' className='item-image'/>
                        <img src='https://bno-restaurant-images.imgix.net/94b0f915-1800-424d-8380-faf17e9a34ab.jpg?fm=jpg&h=275&fit=clip&lossless=1' alt='image' className='item-image'/>
                    </div>
                </div>
                
                <div className='location-bg-container'  id='sectionLocation'>
                    <div className='location-container'>
                        <div className='line-conianer'>
                            <hr className='line'/>
                        </div>
                        <h1 className='about-us-heading'>Our Location</h1>
                        <div>
                              <iframe className='map-image' height="200" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src="https://maps.google.com/maps?width=600&amp;height=300&amp;hl=en&amp;q=5/182%20West%20Coast%20Road,%20Glen%20Eden,%20Auckland%200602,%20New%20Zealand+(Glen%20Eden)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                                <a href="https://www.maps.ie/population/">Find Population on Map</a>
                              </iframe>           
                        </div>
                        <div className='name-hours-button-cntainer'>
                            <h1 className='name'>Glen Eden</h1>
                            <Popup
                              modal
                              trigger={
                                <button className='hours-button'>
                                   <BsClock size={20} className='location-button'/>
                                    Hours
                                </button>
                                }
                              className="popup-content"
                            >
                             {close =>( 
                                <div className='timings-data-container'>
                                    <div className='cancel-button-container'>
                                        <button onClick={() => close()} className='cancel-button'><MdCancel size={15}/> Close</button>
                                    </div>
                                    <div className='day-time-container'>
                                        <p className='day'>Monday</p>
                                        <p className='timings'>03:00 pm - 11:00 pm</p>
                                    </div>
                                    <div className='day-time-container'>
                                        <p className='day'>Tuesday</p>
                                        <p className='timings'>11:00 am - 11:00 pm</p>
                                    </div>
                                    <div className='day-time-container'>
                                        <p className='day'>Wednesday</p>
                                        <p className='timings'>11:00 am - 11:00 pm</p>
                                    </div>
                                    <div className='day-time-container'>
                                        <p className='day'>Thursday</p>
                                        <p className='timings'>11:00 am - 11:00 pm</p>
                                    </div>
                                    <div className='day-time-container'>
                                        <p className='day'>Friday</p>
                                        <p className='timings'>11:00 am - 11:00 pm</p>
                                    </div>
                                    <div className='day-time-container'>
                                        <p className='day'>Saturday</p>
                                        <p className='timings'>11:00 am - 11:00 pm</p>
                                    </div>
                                    <div className='day-time-container'>
                                        <p className='day'>Sunday</p>
                                        <p className='timings'>11:00 am - 11:00 pm</p>
                                    </div>
                                </div>               
                              )}
                            </Popup>
                    </div>
                        <p className='location-para'>
                            <MdLocationPin size={20} className='location-button'/>
                            5/182 West Coast Road, Glen Eden, Auckland 0602, New Zealand
                        </p>
                        <p className='contact-para'>
                            <MdPhoneEnabled size={20} className='location-button'/>
                            09 600 1116
                        </p>
                        <div className='view-menu-button-container'>
                            <Link to='/orderPage'>
                               <button className='view-menu-button'>View Menu & Order</button>
                            </Link>
                        </div>

                    </div>
                </div>
         

                <div className='contact-us-bg-container' id='sectionContactUs'>
                    <div className='contact-us-container'>
                        <div className='line-conianer'>
                            <hr className='line'/>
                        </div>
                        <h1 className='about-us-heading'>Contact Us</h1>
                        <form className='contact-us-form' onSubmit={this.sendMessage}>
                            <div className='type-input-container'>
                                <BsPersonFill size={20} className='form-icon'/>
                                <input type='text' placeholder='Name' className='form-input' value={name} onChange={this.getName}/>
                            </div>
                            <div className='type-input-container'>
                                <HiMail size={20} className='form-icon'/>
                                <input type='email' placeholder='E-Mail' className='form-input' value={email} onChange={this.getEmail}/>
                            </div>
                            <div className='type-input-container'>
                                <MdPhoneEnabled size={20} className='form-icon'/>
                                <input type='number' placeholder='Phone' className='form-input' value={phone} onChange={this.getPhone}/>
                            </div>
                            <textarea className='message-input' placeholder='Message...' type='text' value={message} onChange={this.getMessage}/>
                            {showFormError && <p className='error-form'>{contactError}</p>}
                            <div className='form-button-container'>
                                <button type='submit' className='form-button'>Send Message</button>
                            </div>
                        </form>
                    </div>
                </div>


                <div className='footer-bg-container'>
                    <div className='footer-container'>
                        <div className='social-media-icons-container'>
                            <a href='https://www.facebook.com/pizzaboyz.gleneden/' target='__blank'>
                                <AiFillFacebook size={30} className='insta-icon'/>
                            </a>
                            <a href='https://www.instagram.com/pizzaboyz.gleneden/' target='__blank'>
                                <BsInstagram size={30} className='insta-icon'/>
                            </a>
                        </div>
                        <hr className='footer-line'/>
                        <p className='footer-para'>Powered by <a href='https://www.booknorder.co.nz/' target='__blank' className='footer-link'> Book N Order</a></p>                       
                    </div>
                </div>
                
    
        
            </div>
        )
    }
}

export default Home

