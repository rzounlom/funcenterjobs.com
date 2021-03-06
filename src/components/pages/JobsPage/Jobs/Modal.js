import React from 'react'
import ReactDOM from 'react-dom'
import "./Modal.scss";

const Modal = props => {
    return ReactDOM.createPortal(
        <div className='ui dimmer modals visible active' >
            <div className='ui standard modal visible active' > 
            General Manager          
            <div className='job-description'>
                <div className='job-item'>
                    <div className='job-item-title'>Overview:</div>
                    <div className='job-item-content'><ul><li>Be a leader that people enjoy working with and oversee day to day operations</li></ul></div>
                </div>
                <div className='job-item'>
                    <div className='job-item-title'>Protect our most valuable assets:</div>
                    <div className='job-item-content'>
                    <ul>
                    <li>People, People, People!!!:
                        <ul className='inner-ul'>
                        <li>People are our most valuable assets</li>
                        <li>Maintain a fun and healthy work culture</li>
                        <li>Recruit, train and retain talent</li>
                        <li>Inspire growth and create avenues for professional development</li>
                        <li>Provide exceptional service to our guests</li>
                        </ul>
                    </li>
                    <li>Facility and Attractions:
                        <ul className='inner-ul'>
                        <li>Manage our facility with attention to appearance, safety and function</li>
                        </ul>
                    </li>
                    <li>Revenue:
                        <ul className='inner-ul'>
                        <li>Maintain fiscal responsibility and implement sales & marketing strategies to drive profitability and create a sustainable revenue stream we can use to reinvest in people, attractions, and the community</li>
                        </ul>
                    </li>
                    </ul>
                    </div>
                </div>
                <div className='job-item'>
                    <div className='job-item-title'>Overview:</div>
                    <div className='job-item-content'>
                        <ul>
                            <li>Minimum of 3 years of experience in teaching, coaching, mentoring, training, or supervising</li>
                            <li>Strong organizational and leadership abilities</li>
                            <li>Fast learner and coachable, with desirable interpersonal skills</li>
                            <li>Flexibility to work days, evenings, and weekends</li>
                            <li>Ability to travel within the U.S. for training, meetings, and conferences</li>
                        </ul>
                    </div>
                </div>
                <div className='job-item'>
                    <div className='job-item-title'>Important Note:</div>
                    <div className='job-item-content'>
                        <ul style={{listStyle: 'none'}}><li>The physical demands described here are representative of those that must be met by a team member to successfully perform the essential functions of this job. Reasonable accommodations may be made to enable individuals with disabilities to perform essential job functions. While performing the duties of this position, the team member will regularly be required to:                     
                        <ul className='inner-ul'>
                            <li>Minimum of 3 years of experience in teaching, coaching, mentoring, training, or supervising</li>
                            <li>Strong organizational and leadership abilities</li>
                            <li>Fast learner and coachable, with desirable interpersonal skills</li>
                            <li>Flexibility to work days, evenings, and weekends</li>
                            <li>Ability to travel within the U.S. for training, meetings, and conferences</li>
                        </ul></li></ul>
                        <ul style={{listStyle: 'none'}}><li>
                        The above statements are intended to describe the general nature and level of work being performed by individuals assigned to this job. They are not intended to be an exhaustive list of all responsibilities, duties, and skills.                      
                             </li>
                        </ul>
                    </div>
                </div>
               
            </div>
           
            </div>
        </div>, document.querySelector('#job-modal')
    )
}

export default Modal