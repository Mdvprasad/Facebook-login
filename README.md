Steps to integrate Facebook Login to our React App
Set up a Facebook App
Create React.js App
Install Package "react-facebook-login"
Adding Facebook login to our React app
Run React App to Facebook Login
Run our React App to login with Facebook
1. Set up a Facebook App
After all the requirements are available, we need to register as a Facebook Developer Apps. To register, we need to log in using your existing Facebook account at https://developers.facebook.com/apps/ . If you haven't logged in to Facebook, you will be asked to enter your email or mobile number and password.


After that, you will redirect to https://developers.facebook.com and click “Get Started” if you first register at Facebook Developer Apps.

You will be taken to the registration dashboard , and click “Continue”

Fill container of Primary Email
You will get an email code from Facebook. Fill that container with the code you got earlier.
Choose as “Developer” and the press button “Complete and Registration”
We will be redirected to Facebook for the Developer dashboard
Press the button “Create App” to create an app in Facebook Developer.
Choose “Consumer”(as per requirement) and the press button “Continue”


Fill the App Display Name with what you want to name this app and your email that was previously registered. After that, press the button “Create App”.
After checking the captcha dialog and clicking the submit button, we will be redirected to the Facebook Application Dashboard.
2. Create React.js App
To create a React project we use the command line or CLI. Referring to the https://reactjs.org/docs/create-a-new-react-app.html#gatsby-focus-wrapper, we can create a React project with the command
npx create-react-app fb-login
We can run our React project which is the default design template for create-react-app. To run, we only need to call this command in the terminal, where previously we have directed our terminal into our React project folder (fb_login).
npm start
By default the React app runs on localhost with port 3000.


3. Install the “ react-facebook-login ” library
npm install react-facebook-login
Note: 
We need to set up our React app project to run with HTTPS. This is because currently Facebook Login needs to use HTTPS. To set this up, we need to replace the script of "start"  in our package.json file with the start script below. The package.json file is in the directory "fb-login/package.json "
"start": "HTTPS=true react-scripts start",
‍
4. Adding Facebook login to our React app
We use the FacebookLogin component from the react-facebook-login library to login to Facebook.In this component we need to add the appId (appId="<your appid="">") that we got from the dashboard at Facebook Developer.</your>(pass values as per your app )

‍
The login function is executed when we click the login button. Then the response will be caught by the checkLoginState function.
The authResponse we get will then be processed by the responseApi function.
The responseApi data will be returned to the callback function which in our code was previously used to get the profile data response from our Facebook account.
‍
Next step, Open our Facebook Developer dashboard, click on "Settings" in the left navigation, then select "Basic". Continue scrolling down until you find the "+ Add Platform" button.

Then a platform menu will pop up select platform menu. Choose “Website”

fill in the " Site URL(for local and for production change as per existing one " container with " https://localhost:3000/auth/facebook/callback " and then press the "Save Changes" button.


6. Run our React App to login with Facebook
To run this react app, we use the command line like below.
npm start
Go to https://localhost:3000 and you can see the browser displays a button to Login With Facebook as below.

‍
Click the `Login with Facebook` button then it will be a Facebook login dialog pop up.

Enter your email address or phone number and password. Then press the button “Log in”. It will be a Facebook login dialog pop up again. Press the button “Continue as "your_name"” and it will be back to the previous page with this data.



Facebook login is working fine In our browser,Now it should show  the profile picture and name of our Facebook account. We can see the entire response in the console and we can use it as per our requirement(like displaying profile details.)
After everything as per requirement pass the production url if needed and change mode from development to production then it will be available for all users.
