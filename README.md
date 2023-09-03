# Task-Frontend-1 CODE 530!

Hi! My name is [Mariia Varfolomeeva](https://drive.google.com/file/d/1taoc2hsRtHzncyy9ao37gZQ_K-QCPl3B/view?usp=sharing).
<p>This app was implemented on Vue3/Nuxt3, Pinia, MangoDB, Auth0, Tailwindcss.</p>
<p>Here you can find Management panel where all users can read data and authorised users can create, read, update and delete team members. Also authorised user may add new departments and navigate through them.</p>

## Demo Page

Please visit [DEMO PAGE](https://120-hhg8.vercel.app/)

## Preview

<p align='center'>
  <img src='https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZWh3anliMGg4OTZpemxmcmowMTFnZng3aHJkaWl0dTB6NDN4ampsOCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/r92Bg8t02Bx3IO5Joz/giphy.gif' width='60%'>
</p>

## Usage

<p>All users can read all the data(navigate through departments, read team members).</p>
<p>Authorization is available for visitors.</p>
<p>Authorized user can read, create, update and delete team members. Creating new departments is also available</p>

## API documentation
[Here you can find API documentation](https://app.swaggerhub.com/apis-docs/BMA1989/120/0.0.1)


##  Development
This project uses  `npm`  for development.
#### Steps
1) Clone repository:
   `git clone https://github.com/Mary-Varf/120.git`
2) Open 120 directory `cd 120`
3) Rename `.env.example` to `.env` in root directory
4) Install forcibly dependencies`npm install --force`
5) Please visit [MongoDB](https://cloud.mongodb.com/), create database and generate *connection String URI* like it described in [documentation](https://www.mongodb.com/docs/manual/reference/connection-string/) and pass it as value of `MANGO_URI` in `.env`
6) Visit [Auth0](https://manage.auth0.com/), create application, in the application settings get Domain, Client ID and save these values in to `.env` as `AUTH0_DOMAIN`, `AUTH0_CLIENT_ID`, also add `http://localhost:3000/` to Allowed Callback URLs and Allowed Logout URLs in settings.
7) Run development `npm run dev`

## Deployment
1) Create Git repository with your app
2) Register in [Vercel](https://vercel.com/)
3) Connect Vercel and created Git repository
4) In Auth0 settings add new callback URLs(your Vercel project page URI)
5) Open created project in Vercel and in Settings -> Environment Variables and set `AUTH0_CALLBACK_URL`, `MANGO_URI`, `AUTH0_CLIENT_ID` based on `.env`. `AUTH0_DOMAIN` is your Vercel project domain
6) In Settings -> Build & Development Settings in Install Command as `npm  install --force`
7) In Vercel Deployment redeploy the last one
8) In Project press Visit button
