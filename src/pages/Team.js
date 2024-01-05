import '../components/Team.css';
import Team1 from '../imges/team-1.jpg';
import Team2 from '../imges/team-2.jpg';
import Team3 from '../imges/team-3.jpg';
import Team4 from '../imges/team-4.jpg';
import Team5 from '../imges/team-5.jpg';
import Team6 from '../imges/team-6.jpg';

function Team(){
    
    return(
        <div id='team'>
            <div className='row'>
                <h3>THE TEAM</h3>
                <h1>EXPERT TRAINERS</h1>
            </div>
            <div className='row'>
                <div className='col'>
                    <img src={Team1} alt='team'/>
                    <h1>Lorem Ipsum</h1>
                    <h4>TRAINER</h4>
                </div>
                <div className='col'>
                    <img src={Team2} alt='team'/>
                    <h1>Lorem Ipsum</h1>
                    <h4>TRAINER</h4>
                </div>
                <div className='col'>
                    <img src={Team3} alt='team'/>
                    <h1>Lorem Ipsum</h1>
                    <h4>TRAINER</h4>
                </div>
            </div>
            <div className='row'>
                <div className='col'>
                    <img src={Team4} alt='team'/>
                    <h1>Lorem Ipsum</h1>
                    <h4>TRAINER</h4>
                </div>
                <div className='col'>
                    <img src={Team5} alt='team'/>
                    <h1>Lorem Ipsum</h1>
                    <h4>TRAINER</h4>
                </div>
                <div className='col'>
                    <img src={Team6} alt='team'/>
                    <h1>Lorem Ipsum</h1>
                    <h4>TRAINER</h4>
                </div>
            </div>
        </div>
    );
}
export default Team;