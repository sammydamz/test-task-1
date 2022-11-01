import React from 'react';
import './App.css';
import img1 from './sammie.png';
import sharebtn from './sharebtn.svg';



function App() {
  return (
  <div className='App'>
    <section className='taskMain'>
     <section className='mainSection'>
       <div className='msContentWrapper'>
         <div className='profileCont'> 
           <img src={img1} className="proImage" alt="profileImage" />
           <p id='profName'>SAMUEL DANQUAH ANKAPONG</p>
           <a href='#'><img src={sharebtn} id="sharebtn" alt="share button" /></a>
          </div>
          <div className='listCont'>
            <div className='sp1' id='spp1'>
               <a href="https://twitter.com/home"><div className='linkbox1'><p className='ltext'>Twitter</p></div></a>
            </div>
            <span className='lspace'></span>
            <div className='sp1' id=' btn__zuri'>
              <a href="“https://training.zuri.team/”"><div className='linkbox1'><p className='ltext'>Twitter</p></div></a>
            </div>
            <span className='lspace'></span>
            <div className='sp1' id='spp3'>
              <a href="https://twitter.com/home"><div className='linkbox1'><p className='ltext'>Twitter</p></div></a>
            </div>
            <span className='lspace'></span>
            <div className='sp1' id='spp4'>
              <a href="https://twitter.com/home"><div className='linkbox1'><p className='ltext'>Twitter</p></div></a>
            </div>
            <span className='lspace'></span>
            <div className='sp1' id='spp5'>
              <a href="https://twitter.com/home"><div className='linkbox1'><p className='ltext'>Twitter</p></div></a>
            </div>
            <span className='lspace'></span>
            <div className='sp1' id='spp6'>
              <a href="https://twitter.com/home"><div className='linkbox1'><p className='ltext'>Twitter</p></div></a>
            </div>
          </div>
        </div>
      </section>
      <section className='socialSection'>
      <div className='ssContentWrapper'>
      </div>
     </section>
   </section>
  </div>  
  );
}

export default App;
