import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Card, RaisedButton, FlatButton, CardHeader, CardText } from 'material-ui';


export default class Projects extends React.Component {

    render () {
        const style = {
            height: 100,
            width: 100,
            margin: 20,
            textAlign: 'center',
            display: 'inline-block',
        };
        const margBotStyle = {
            marginBottom: "20px"
        }
        const compMargin = {
            margin: "0px 20px 0px 20px"
        }
        return (
            <MuiThemeProvider>
                <div className="comp" style={compMargin}>
                    <div style={margBotStyle}>*Expand each card to view project details*</div>
                    <Card style={margBotStyle}>
                        <CardHeader
                        title="Boozefeed"
                        subtitle="Web Application"
                        actAsExpander={true}
                        showExpandableButton={true}
                        />
                        <CardText expandable={true}>
                            
                            Boozefeed is a web application that was built using ReactJS and Bootstrap. Boozefeed allows users to
                            take and create different personality tests. The personality tests each have an algorithm to help determine
                            the results. Users are able to view and delete their results or the 
                            quizzes they made. Along with 2 other members, I contributed as the dev lead where I made executive designs
                            about the implemented solution to ensure the code was efficient. 
                            <br /> <br />
                            <RaisedButton label="View the Boozefeed app" secondary={true} onClick={() => window.open('https://bit.ly/boozefeed', '_blank')} />
                            
                        </CardText>

                    </Card>
                    <Card>
                        <CardHeader
                        title="SCHEELD"
                        subtitle="Wireframe"
                        actAsExpander={true}
                        showExpandableButton={true}
                        />
                        <CardText expandable={true}>
                            SCHEELD is a mobile application prototype for the target audience of college students. After conducting user
                            research, students felt the campus did not does not provide helpful and convenient resources for themselves and 
                            classmates to travel home safely. SCHEELD provides advanced emergency with the click of a button, timed alerts and
                            updates to friends, and location tracking for the desired destination. Along with 3 other members, I contributed to 
                            the user research, wireframing and high-fidelty prototype design. 
                            <br /> <br />
                            <RaisedButton primary={true} label="View the IOS App" onClick={() => window.open('https://invis.io/M4NQ06O57XD', '_blank')} />
                            <RaisedButton secondary={true} label="View the Apple Watch App" onClick={() => window.open('https://invis.io/9RNQ064Z78V', '_blank')}/>
                            
                        </CardText>
                    </Card>
                </div>
            </MuiThemeProvider>
        );
    }
}