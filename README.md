## Choreward
In order to maintain a household, there are lots of tasks that need to get done throughout the day. However, often times, these tasks get neglected. Sometimes, people get distracted and turn their attention to something else. Other times, people intentionally put off their duties, as they can often be a pain to do. And keeping track of everything that needs to get done can be messy. Choreward sets to solve these problems by giving people an incentive to do their chores.

Choreward is a web app where families compete with each other in doing various household chores. Every week, the app will present all of the signed up families with certain household tasks. Members of each family can upload a video of them doing said task, while other families award points based on how much they liked the video. With these points, users within the family can purchase in-site trophies, profile customization, and rewards set by the head of the family.

Each family consists of a head (the person who makes the family group), and various “member accounts” who can post videos on behalf of the family. Besides setting up the family, the head is in charge of making custom rewards (as mentioned before), and initiating one on one chore competitions with other families. Instead of posting videos in response to a weekly objective, the two families compete directly with each other to see who can do the most chores within a certain time period. The two families get points from third party families, and whoever earns the most points within the timeframe wins the competition.
## Team member:

Walker Bove, Rongda Kang, Ruchita Paithankar, Hantao Guo

## Technology Stack

### Languages
JavaScript (React.js), GraphQL

### Tools
AWS Amplify
- Amazon Cognito
- Dynamo DB
- S3
- Appsync
- Cloud Watch (For Monitoring Development and Testing)
- I AM (For Privileged access)

### Infrastructure
**AWS Services**
are the backbone of the infrastructure, providing a variety of solutions for hosting, computing, storage, and more. 

## Usage

Once a user signs up on the Choreward website, they can either create a family, or they can join an already existing family if they recieve an invite. The main page of the website contains all of the tasks for the current week. For each task, the user can either submit a video for the task, or they can view the videos that others have posted. If they go to view a video, they can "like" it (to give the user and their family points) and leave comments.

Another page is dedicated to one on one family battles. In these battles, two families receive a list of chores. Members of these families submit videos for these chores, and 
the family whose videos get the most amount of likes wins the competition. Family heads can start these competitions by sending challenge requests other family heads.

## React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
