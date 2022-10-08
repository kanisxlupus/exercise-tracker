import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import {IoIosCreate} from 'react-icons/io';
import {IoCreateOutline} from 'react-icons/io5';
import {AiOutlineHome, AiFillHome} from 'react-icons/ai'
import Tooltip from 'react-tooltip';

function Navigation() {
    let [homeHover, setHomeHover] = useState(false);
    let [createHover, setCreateHover] = useState(false);

    const toggleHome = () => {setHomeHover(!homeHover);};

    const toggleCreate = () => {
        setCreateHover(!createHover);
    };

    return (
        <nav className='menu'>
            <Link to="/" data-tip data-for="homeTip" className='navLink'>
                {homeHover
                    ? <AiFillHome className='navIcon' onMouseLeave={toggleHome}/>
                    : <AiOutlineHome className='navIcon' onMouseEnter={toggleHome}/>
                }

                <Tooltip id="homeTip" place="top" delayShow={500} onMouseLeave={Tooltip.hide(this)}>
                    Go to the Home Page
                </Tooltip>
            </Link>
            <Link to="/add-exercise" data-tip data-for="createTip" className='navLink'>
                {createHover
                    ? <IoIosCreate className='navIcon' onMouseLeave={toggleCreate}/>
                    : <IoCreateOutline className='navIcon' onMouseEnter={toggleCreate}/>
                }

                <Tooltip id="createTip" place="top" delayShow={500} onMouseLeave={Tooltip.hide(this)}>
                    Create a new exercise
                </Tooltip>
            </Link>
        </nav>
    );
}

export default Navigation;