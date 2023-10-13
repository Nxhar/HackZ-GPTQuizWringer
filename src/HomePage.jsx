import React ,{useEffect}from 'react';
import ScrollReveal from 'scrollreveal';

const Pyramid = () => {
    useEffect(() => {
        const scrollReveal = ScrollReveal({
          reset: true,
          distance: '40px',
          duration: 2400,
          delay: 400
        });
    
        scrollReveal.reveal('#HeroImg', { delay: 500, origin: 'right' });
        scrollReveal.reveal('#HeroContent', { delay: 500, origin: 'left' });
      }, []);
  return (
    <div className="HeroCon" id="Pycon">
        <div id="HeroContent" className='HeroDiv'>
            <p>Explore the world of possibilities through our content.Discover, learn, and grow with our carefully curated content</p>
        </div>
        <div id="HeroImg" className='HeroDiv'>
        <div className="pyramid-loader">
  <div className="wrapper">
    <span className="side side1" />
    <span className="side side2" />
    <span className="side side3" />
    <span className="side side4" />
    <span className="shadow" />
  </div>
</div>
        </div>
    </div>
  )
}

const Hero = () => {
    useEffect(() => {
        const scrollReveal = ScrollReveal({
          reset: true,
          distance: '40px',
          duration: 2400,
          delay: 400
        });
    
        scrollReveal.reveal('#HeroImg', { delay: 500, origin: 'left' });
        scrollReveal.reveal('#HeroContent', { delay: 500, origin: 'right' });
      }, []);
  return (
    <div >
    <div className="HeroCon" id="cube">
        <div id="HeroImg" className='HeroDiv'>
        <div className="cube-loader">
      <div className="cube-top"></div>
      <div className="cube-wrapper">
        <span style={{ '--i': 0 }} className="cube-span"></span>
        <span style={{ '--i': 1 }} className="cube-span"></span>
        <span style={{ '--i': 2 }} className="cube-span"></span>
        <span style={{ '--i': 3 }} className="cube-span"></span>
      </div>
      </div>
        </div>
        <div id="HeroContent" className='HeroDiv'>
            <p><span>W</span>elcome to QUESTAI, where curiosity meets knowledge.</p>
        </div>

    </div>
    <Pyramid />
    </div>
  )
}

export default Hero