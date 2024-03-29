import React from 'react';
import NavigationItems from '../NavigationItems/NavigationItems';
import Logo from '../../Logo/Logo'
import classes from './SideDrawer.css'
import BackDrop from '../../UI/BackDrop/Backdrop'
import Aux from '../../../hoc/Auxer'
const sideDrawer = (props) =>
{
    let attachedClasses = [classes.SideDrawer,classes.Close];
    if (props.open) {
        attachedClasses = [classes.SideDrawer , classes.Open];
    }
    return  (
        <Aux>
            <BackDrop  show = {true} clicked = {props.closed}/>
            <div className={attachedClasses.join(' ')}>
                <div className={classes.Logo}>
                    <Logo />
                </div>

                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Aux>

    )
}



export default sideDrawer;
