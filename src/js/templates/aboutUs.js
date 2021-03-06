import React, { Component } from 'react';

/* Media */
import header from "../../assets/img/siteMedia/group2.jpg";
import img2 from "../../assets/img/siteMedia/pastor4.jpg";
import img3 from "../../assets/img/siteMedia/img5.jpg";

class AboutUs extends Component{
    constructor(props) {
        super(props);

        this.state = {}
    } 

    render(){        
        return(
            <div className="site-page about-us">
                <section className="title-card c1">
                    <h1 className="font-title1">About Us</h1>
                    <div className="back-img">
                        <div className="cover c3c2"></div>
                        <img src={header} alt="about us header"/>
                    </div>
                </section>

                <section className="body-section full-txt notched-top">
                    <h1 className="font-title1">Greetings</h1>
                    <p>We, the members of Clinton African Methodist Episcopal Zion Church, are delighted to greet you in the name of our Lord and Savior, Jesus, the Christ.</p>
                    <p>We have assembled under the Divine authority and sovereignty of Almighty God, as the children of God and the followers of Jesus, the Christ. We understand ourselves to be the beloved community of faith that has been called out of the world to proclaim the Good News of Jesus Christ to all people.</p>
                    <p>We endeavor by preaching, teaching and equipping others and ourselves, to be true to the Gospel of Jesus Christ, and to minister holistically to those who are in need. We believe that God has called us, “to preach the gospel to the poor, to heal the brokenhearted, to preach deliverance to the captives, and recovery of sight to the blind, to set at liberty them that are bruised, to preach the acceptable year of the Lord.” (Luke 4:17-19)</p>
                    <p>It is only through faith, God’s costly grace, and God’s unmerited favor toward each of us, that we will be able to deny ourselves, take up our cross daily and follow Jesus. We believe that by the power and presence of the Holy Spirit, we will be the church that God has called us to be.</p>
                    <p>We hope that the information found in this website will help you know more about us, and our ministry. We believe in a holistic ministry, in which the whole person is ministered to. We believe in the importance and vitality of a teaching ministry and worship ministry. Study of the Bible does not take the place of community worship, nor does community worship take the place of the study of the Bible. They are mutually inclusive.</p>
                    <p>We invite you to fellowship with us, to walk your faith journey with us, and to join Clinton African Methodist Episcopal Zion Church.</p>
                </section>

                <section className="body-section img-txt notched-left c3">
                    <div className="img-content"><img src= {img2} alt="what we believe"/></div>
                    <div className="txt-content">
                        <h1 className="font-title1">What We <span>Believe!</span></h1>

                        <p>We believe that The Lord, our God, is One Lord and the only True God. We speak of Him, correctly, as God the Father, Son and Holy Spirit.</p>
                        <p>We believe that The Son of God, Who is indeed God Himself, took on man’s nature in the Virgin Mary and was born in the person of Jesus of Nazareth. He suffered, was crucified, died and was buried, in order to reconcile all humankind in general, and each person in particular, to God The Father; for we have all fallen from God by the Original Sin and guilt of our first parents, Adam and Eve, and the continued actual sin and guilt in each of us.</p>
                        <p>We believe that this same Jesus, Whom we call Christ, did rise from the dead, in bodily form, on the third day after His death. This same Jesus ascended into heaven, where He lives eternally with, and in, The Father. At the end of time, as we know time, He shall return to judge all humankind.</p>
                        <p>We believe that The Holy Spirit (Holy Ghost) proceeds from God, The Father and God, The Son, and is one with Them in Service, to inspire, illuminate and sustain the children of God.</p>
                        <p>We believe that God Almighty has called us to serve Him by declaring His Truth in thought, word and deed, to the whole world. That only by the Truth, which is Jesus, The Son of God can we find freedom and liberation from the evil that is manifested by sin and guilt within and the sin, exploitation and oppession from without.</p>
                        <p>We believe and affirm the twenty-five (25) Articles of Religion found in the The Discipline of THE AFRICAN METHODIST EPISCOPAL ZION CHURCH.</p>            
                    </div>
                </section>

                <section className="body-section img-txt notched-right">        
                    <div className="txt-content">
                        <h1 className="font-title1">Our <span>Vision</span></h1>

                        <p>Our vision is to affect a completely transformed community of faith, worthy of citizenship in the Kingdom of God, by the power of God through His Son Jesus Christ.</p>
                        <p>Our mission is to produce ministries that will serve the CAUSE of Christ through the spiritual transformation of minds, bodies and spirits; love and care for one another in the spirit of a faith COMMUNITY; and be CORPORATELY accountable in our stewardship of God’s blessings upon us. If you do not have a church home, we invite you join us here where Christ is at the center.</p>
                    </div>
                    <div className="img-content"><img src={img3} alt="our vision"/></div>
                </section>
            </div>    
        );        
    }

    componentDidMount(){ window.scrollTo(0, 0); }
}

export default AboutUs;