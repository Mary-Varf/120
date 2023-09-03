# Frontend - CMS CODE 530!

Hi! My name is [Mariia Varfolomeeva](https://drive.google.com/file/d/1taoc2hsRtHzncyy9ao37gZQ_K-QCPl3B/view?usp=sharing).
This app was implemented on Vue3/Nuxt3, Pinia, MangoDB, Auth0, Tailwindcss.
Here you can find Management panel where all users can read data and authorised users can create, read, update and delete team members. Also authorised user may add new departments and navigate through them.

## Demo Page

Please visit [DEMO PAGE](https://120-hhg8-2mwwvxecv-mary-varf.vercel.app/)

## Preview

<p align='center'>
  <img src='https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExODhva2R6Mndkejl4ZzVjbTI5dDE5YnpyOGZkbHgwMmV0Ym40amRvYSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/opKkTULaz02kH7Tngm/giphy.gif' width='60%'>
</p>

## Endpoints
REST API:

- GET members `/api/members/all`
- POST member `/api/members/create`
- PUT member `/api/members/[id]`
- DELETE member `/api/members/[id]`
- GET departments `/api/departments/all`
- POST department `/api/departments/create`


##  Development
This project uses  `npm`  for development.
#### Steps
1) Clone repository:
   `git clone https://github.com/Mary-Varf/120.git`
2) Create `.env` in root directory
3) Open 120 directory `cd 120`
4) Install forcibly dependencies`npm install --force`
5) Please visit [MongoDB](https://cloud.mongodb.com/), create database and generate *connection String URI* like it described in [documentation](https://www.mongodb.com/docs/manual/reference/connection-string/) and pass it as value of `MANGO_URI` in `.env`
6) Create in you MongoDB table `department` and at least one item in format: `department: String`
7) Visite [Auth0](https://manage.auth0.com/), create application, in the application settings get Domain, Client ID and save these values in to `.env` as `AUTH0_DOMAIN`, `AUTH0_CLIENT_ID`, also add `http://localhost:3000/` to Allowed Callback URLs and Allowed Logout URLs in settings
8) Run development `npm run dev`


For deploy run `npm run generate` 