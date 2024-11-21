import React from 'react';
import './Features.css';

import chartIcon from '../../assets/chart.jpg';
import messageIcon from '../../assets/message.jpg';
import zapIcon from '../../assets/zap.png';
import iphone from '../../assets/iPhone 12 Pro mockup.png';
import desktop from '../../assets/desktop.jpg';

function Features() {
    const card = [
        {
            id: 1,
            icon: messageIcon, 
            title: "Share team inboxes",
            description:
                "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.",
            button: "Learn more →"
        },
        {
            id: 2,
            icon: zapIcon, 
            title: "Deliver instant answers",
            description:
                "An all-in-one customer service platform that helps you balance everything your customers need to be happy..",
            button: "Learn more →"
        },
        {
            id: 3,
            icon: chartIcon, 
            title: "Manage your team with reports",
            description:
                "Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.",
            button: "Learn more →"
        },
    ];

    return (
        <div>
            <div className="features-container">
                <div className="features-buttons">
                    <button className="features-button">Features</button>
                </div>
                <h2 className="features-heading">Cutting-edge features for advanced analytics</h2>
                <p className="features-subheading">
                    Powerful, self-serve product and growth analytics to help you convert, <br />engage, and retain more users. Trusted by over 4,000 startups.
                </p>
            </div>
      
          <div className='image-container'>
            
            <img className='desktop'src={desktop}/>
            <img className='iphone'src={iphone} />
          </div>




            <div className="features-cards">
                {card.map((post) => (
                    <div className="features-card" key={post.id}>
                        <div className="card-icon">
                            <img src={post.icon} alt={post.title} className="icon-image" /> 
                        </div>
                        <div className="card-content">
                            <h2 className="card-title">{post.title}</h2>
                            <p className="card-description">{post.description}</p>
                            <div className="card-footer">
                                <p className="learn-button">{post.button}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Features;
