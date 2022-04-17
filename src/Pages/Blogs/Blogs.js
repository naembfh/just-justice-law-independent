import React from 'react';

const Blogs = () => {
    return (
        <div className='m-2 '>
            <h1>Blogs</h1>
            <h3> Why are you using firebase? What other options do you have to implement authentication?</h3>
            <p>- I think Firebase is small or easy to learn first authentication. So it has been shown in the course to teach us easily and since most of the case front end logic of Firebase is used so it is easy for us to setup. It provides end to end solution, supporting email and passwors accounts, phoneAuth and Google, Twitter, Facebook, Github login and more. There are other alternatives without firebase such as Parse, Flutter, Back4App, Okta etc.</p>
            <h3>Difference between authorization and authentication?</h3>
            <p>- Authentication: The process of determining whether someone, something, or someone's act (claiming to be true) is actually true. Example - User. <br />
                - Authorization: The process of giving someone permission to do something or use resources. Example - Admin. </p>
            <h3>What other services does firebase provide other than authentication?</h3>
            <p>- There are many services which Firebase provides, Most useful of them are: <br />

                (1)Cloud Firestore
                (2)Cloud Functions

                (3)Hosting
                (4)Cloud Storage
                (5)Google Analytics
                (6)Predictions
                (7)Cloud Messaging
                (8)Dynamic Links
                (9)Remote Config</p>
        </div>
    );
};

export default Blogs;