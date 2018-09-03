import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Paper, Avatar } from 'material-ui';

import cruise from "../img/cruise.JPG";
import starbucks from "../img/starbucks.JPG";
import tree from "../img/tree.JPG";

export default class AboutMe extends React.Component {

    render () {
        const compStyle = {
            padding: "20px 100px 10px 100px"
        }

        return (
            <MuiThemeProvider>
                
                <div className="comp">
                    <div className="aboutme-pics">
                        <img src={cruise} />
                        <img src={starbucks} />
                        <img src={tree} />
                            
                    </div>
                    <div className="aboutme-side">
                        <p>
                            Hello! My name is Cecilia Vu and welcome to my page! I'm currently an Informatics student 
                            at the University of Washington with an interest in web development. <br /><br />
                        </p>
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
}