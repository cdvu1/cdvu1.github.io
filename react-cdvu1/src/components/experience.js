import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Paper, Avatar } from 'material-ui';


export default class Experience extends React.Component {

    render () {
        const style = {
            height: 100,
            width: 100,
            margin: 20,
            textAlign: 'center',
            display: 'inline-block',
          };
        const compStyle = {
            padding: "20px 50px 10px 50px"
        }
        return (
            <MuiThemeProvider>
                
                <div style={compStyle}>
                    Experiences here
                </div>
            </MuiThemeProvider>
        );
    }
}