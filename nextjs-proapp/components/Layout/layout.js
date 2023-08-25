import { Fragment } from 'react';
import MainHeader from '../Layout/main-header'


function Layout(props) {
    return (

        <Fragment>
            <MainHeader />
            <main>{props.children}</main>
        </Fragment>
    );
}

export default Layout;