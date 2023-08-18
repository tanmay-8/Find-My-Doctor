
# Find My Doctor

Here I have tried to develop a website where users can conveniently search for specialized doctors in their locality.\
The website allows users to enter their details and location and then search for diseases and medical conditions that they need help with. 

Then doctors who are specialized in the user's specific medical problem and are located near them are displayed.

The profile of each doctor includes their name, qualifications, experience, specialty, and contact information. Users can also access valuable reviews from previous patients to help them make decisions.

Booking an appointment is easy and efficient. Users can make
Appointments with the doctor of their choice directly through the platform and select a suitable date and time for their visit.

I have used demo data and images for development.


## Demo Video
[Demo Video](https://drive.google.com/file/d/17tk_zeCUgSNnRuQOjeiRrOJdNn7OM8TE/view?usp=sharing)

##Link
[Link](https://drive.google.com/file/d/17tk_zeCUgSNnRuQOjeiRrOJdNn7OM8TE/view?usp=sharing)

## Tech Stack 

**Client:** React, Redux, TailwindCSS

**Server:** NodeJs, ExpressJs

**Database:** MongoDb

## Run Locally

**Reauirements:**
- Install and setup NodeJs
- Install and setup MongoDb


Clone the project

```bash
  git clone https://github.com/tanmay-8/Find-My-Doctor.git
```

Go to the project directory

Separate backend folder and keep all other folders and files in frontend folder.

**For backend**

- Install dependencies

```bash
  npm install
```

- Create environment file .env it should include your jwt sign 

`JWT_SIGN`

- Change url of databse in db.js
- Start MongoDb

```bash
mongod
```

- All done now to start server run

```bash
  nodemon app
```

- Check http://localhost:5000/

**For frontend**

- Install dependencies

```bash
  npm install
```
- Configure tailwind css

  [Tailwind with react](https://tailwindcss.com/docs/guides/create-react-app)

- Start development server

```bash
  npm start
```

- Check http://localhost:3000/

## More
- The project still has lot of scope for improvement.
- We can create a separate portal for doctors to manage appointments.
- The addition of doctors has to be done manually. 
