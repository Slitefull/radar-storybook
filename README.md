# React Setup

Follow these steps to setup react on development machine:

- Install nodejs and npm. I have these versions installed in my machine:
```sh
nodejs -v
v16.15.0
```

```sh
npm -v
8.5.5
```

- Clone seoradar react codebase:
```sh
git clone https://github.com/SEORadar/seoradar-client.git
```

- Install packages:
```sh
npm install
```

- Create a directory with name `React Builds` at the same location where `workstation` directory is present

- Build react using:
```sh
npm run build:dev
```

- The above would create a `build` directory in react repo

- Copy the entire `build` directory to `React Builds` directory

- Copy `copy_react_build_to_rails.sh` script at the same location where `workstation` is present. It should be present at the base location in react repo.

- Go inside this rails directory `workstation/engine/public`. Create `onboarding` and `static` directory.

- Update the paths in `copy_react_build_to_rails.sh` as required and execute it.

- Finally copy the `build/index.html` file into `onboarding` directory.

- Now try to access this URL: `https://customer.seoradar.local/onboarding/sign_up/index.html?service_level=Lite&service_level_id=646`. Provide the ID of package `Lite` as in local database. You should be able to see signup page.

- If yes setup complete!

# Authorization contacts
- Front-end will send the `bearer token` in every private request. 

- Front-end expect from the backend validation for this `bearer token`. 

- If token is invalid or expired - front-end expects `401 code status`. 

- `401 Unauthorized` - is the status code to return when the client provides no credentials or invalid credentials.

- `403 Forbidden` -  is the status code to return when a client has valid credentials but not enough privileges to perform an action on a resource.