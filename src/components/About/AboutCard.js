import React from 'react';
import './aboutcard.css'

const AboutCard = () => {
  return (
    // <div className="CardGroup1">
    //     <div className="CardWrap">
    //         <h3>{props.name}, </h3>
    //         <h6>{props.position}</h6>
    //         <div className="Card1">
    //             <img alt="team" src={props.image}/>
    //         </div>
    //         <div className="panel-collapse">
    //             <div className="panel-body1">
    //                 {props.description}
    //             </div>
    //         </div>
    //     </div>
    // </div>
    <div className="AboutSection">
        <div className="AboutContainer">
            <div className="CardGroup1">
                <div className="CardWrap">
                    <h3>Lynh Severson, </h3>
                    <h6>Co-Founder</h6>
                    <h6 className="email"><p><a href="mailto:lynh@lgmarketing.me">lynh@lgmarketing.me</a> | <a href="tel:408-826-1403">Phone: (408) 826-1403</a></p></h6>
                    <div className="Card1">
                        <img alt="team" src={'https://drh2acu5z204m.cloudfront.net/items/2W1s2W3Z2d043q0o2612/LG-Lynh.jpg?X-CloudApp-Visitor-Id=3116428&v=0a1c1e00'}/>
                    </div>
                    <div className="panel-collapse">
                        <div className="panel-body1">
                            <p>Lynh brings over 15 years of experience in building brand awareness across a multi-product portfolio ranging from Ophthalmology to tumor therapy solutions. Quality time spent with family, friends and the relationships built within LG Marketing is what drives her. Ask her about her work and she'll tell you "the most effective way to do it, is to do it" <span className="author">-Amelia Earhart</span></p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="CardGroup1">
                <div className="CardWrap">
                    <h3>Gina Jackman, </h3>
                    <h6>Co-Founder</h6>
                    <h6 className="email"><p><a href="mailto:lynh@lgmarketing.me">gina@lgmarketing.me</a> | <a href="tel:408-483-7132">Phone: (408) 483-7132</a></p></h6>
                    <div className="Card1">
                        <img alt="team" src={'https://drh2acu5z204m.cloudfront.net/items/1m0L151M0X3i0A0c2r2q/LG-Gina.jpg?X-CloudApp-Visitor-Id=3116428&v=1637cac0'}/>
                    </div>
                    <div className="panel-collapse">
                        <div className="panel-body1">
                            <p>The “G” in LG Marketing, Gina Jackman, has spent 15 years in the marketing profession with more than half of those years dedicated to Align Technology (the makers of Invisalign® clear aligners). Her life mantra is simple: Wake up. Work hard. Have fun. Be kind. Repeat. For a fun fact ask her where she got engaged.</p> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default AboutCard
