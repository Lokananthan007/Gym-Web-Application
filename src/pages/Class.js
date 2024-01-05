import '../components/Class.css';

function Class(){
    return(
        <div id="class">
            <h4>CLASS SCHEDULE</h4>
            <h2>WORKING HOURS</h2>
            <div className='row'>
                <ul>
                    <li>
                        <a href="#work">MONDAY</a>
                    </li>
                    <li>
                        <a href="#work">TUSDAY</a>
                    </li>
                    <li>
                        <a href="#work">WEDNESDAY</a>
                    </li>
                    <li>
                        <a href="#work">THURSDAY</a>
                    </li>
                    <li>
                        <a href="#work">FRIDAY</a>
                    </li>
                    <li>
                        <a href="#work">SATURDAY</a>
                    </li>
                    <li>
                        <a href="#work">SUNDAY</a>
                    </li>
                </ul>
            </div>
            <div id="work">
                <div className='row'>
                    <div className='col'>
                        <h4>6.00AM - 8.00AM</h4>
                        <h2>POWER LIFTING</h2>
                        <h3>Lorem Ipsum</h3>
                    </div>
                    <div className='col'>
                        <h4>8.00AM - 10.00AM</h4>
                        <h2>PBODY BUILDING</h2>
                        <h3>Lorem Ipsum</h3>
                    </div>
                    <div className='col'>
                        <h4>10.00AM - 12.00PM</h4>
                        <h2>CARDIO PROGRAM</h2>
                        <h3>Lorem Ipsum</h3>
                    </div>
                    <div className='col'>
                        <h4>12.00PM - 2.00PM</h4>
                        <h2>WEIGHT <br/>LOOSE</h2>
                        <h3>Lorem Ipsum</h3>
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        <h4>2.00PM - 4.00PM</h4>
                        <h2>FITNESS PROGRAM</h2>
                        <h3>Lorem Ipsum</h3>
                    </div>
                    <div className='col'>
                        <h4>4.00PM - 6.00PM</h4>
                        <h2>CROSSFIT CLASS</h2>
                        <h3>Lorem Ipsum</h3>
                    </div>
                    <div className='col'>
                        <h4>6.00PM - 8.00PM</h4>
                        <h2>MUSCLE BUILDING</h2>
                        <h3>Lorem Ipsum</h3>
                    </div>
                    <div className='col'>
                        <h4>8.00PM - 10.00PM</h4>
                        <h2>YOGA <br/>CLASS</h2>
                        <h3>Lorem Ipsum</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Class;