import React from 'react';
import './App.css';
import img1 from './sammie.png';
import sharebtn from './sharebtn.svg';
import slack from './slackIcon.svg';
import twitter from './twitter.svg';
import i4glogo from './I4Glogo.svg';
import zuri from './zurilogo.svg';



function App() {
  return (
  <div className='App'>
    <section className='taskMain'>
     <section className='mainSection'>
       <div className='msContentWrapper'>
         <div className='profileCont'> 
           <img src={img1}  id="profile__img" alt="profileImage" />
           <p id='twitter'><img src={twitter} id="twi_img" alt="Twitter Icon" />@_sammydamz</p>
           <a href='#'><img src={sharebtn} id="sharebtn" alt="share button" /></a>
           <p id='slack'><img src={slack} id="twi_img" alt="Slack Icon" />@sammydamz</p>

          </div>
          <div className='listCont'>
            <div className='sp1' id='btn__zuri'>
               <a href="https://training.zuri.team/" target="_blank" rel="noreferrer"><div className='linkbox1' ><p className='ltext'>Zuri Team</p></div></a>
            </div> 
            <span className='lspace'></span>
            <div className='sp1' id='books'>
              <a href="http://books.zuri.team" target="_blank" rel="noreferrer"><div className='linkbox1'><p className='ltextwithsubtext'>Zuri Books</p><sub className='ltexta'>Get the finest books to improve your coding and design experience</sub></div></a>
              
            </div>
            <span className='lspace'></span>
            <div className='sp1' id='book_python'>
              <a href="https://books.zuri.team/python-for-beginners?ref_id=<yourslackname>"  target="_blank" rel="noreferrer"><div className='linkbox1'><p className='ltextwithsubtext'>Python Books</p><sub className='ltexta'>Develop professional Python skills with our latest book </sub></div></a>
            </div>
            <span className='lspace'></span>
            <div className='sp1' id='pitch'>
              <a href="https://background.zuri.team" target="_blank" rel="noreferrer"><div className='linkbox1' ><p className='ltextwithsubtext'>Background Check for Coders</p><sub className='ltexta'>We help you to know more about your coding background</sub></div></a>
            </div>
            <span className='lspace'></span>
            <div className='sp1' id='book_design'>
              <a href="https://books.zuri.team/design-rules" target="_blank" rel="noreferrer"><div className='linkbox1' target="_blank"><p className='ltextwithsubtext'>Design Books</p><sub className='ltexta'>Learn Design techniques form top-notch designers</sub></div></a>
              <sub></sub>
            </div>
            <span className='lspace'></span>
          </div>
        </div>
      </section>
      <span className='footsep'></span>
      <section className='footerSection'>
      <div className='footCont'>
        <div id='zurifooter'>
        <a href='https://internship.zuri.team/' target='_blank' rel="noreferrer"><img src={zuri}  alt="Zuri Internship" /></a><span className='sepfoot2'></span><p id='zuritext'>HNG Internship 9 Frontend Task</p><span className='sepfoot2'></span><a href='https://ingressive.org/' target='_blank' rel="noreferrer"><img src={i4glogo}  alt="I4Glogo" /></a>
        </div>
       
       
      </div>
    </section>
        
    </section>
    
  
  </div>  
  );
}

export default App;
