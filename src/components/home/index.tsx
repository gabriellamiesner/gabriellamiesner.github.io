import {Grid, Heading} from "@chakra-ui/react";

 import SomeText from "./components/SomeText";
import Project from "./components/Project";
import Job from "./components/Job";

const Home = () => {
  return (
    <Grid gap={4}>
      <SomeText />
        <hr />
        <Heading>
            Projects
        </Heading>
        <Project link = 'https://devpost.com/software/the-bechdel-test' image = 'https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/software_photos/001/613/723/datas/gallery.jpg' imageAlt = "Scatter Plot Dashboard" division = "Data Visualization" languages = "Python (Plotly)" title = "The Bechdel Test" description = "Cleaned and Visualized 40+ years of data on Female Representation in Movies using Pandas and Plotly."/>
        <Project link = 'https://devpost.com/software/neurosight' image = 'https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/software_photos/001/304/452/datas/gallery.jpg' imageAlt = "NeuroSight Landing Page" division = "Data Visualization" languages = "Python (Matplotlib, Seaborn)" title = "NeuroSight" description = "Developed script to generate test school data. Visualized test data using Matplotlib and Seaborn. Won TechTogether New York. "/>
        <Project link = 'https://miztier.vercel.app' image = 'https://user-images.githubusercontent.com/51331370/146568995-610dd4f2-c5a2-4350-a1e0-ffee4a2c1675.png' imageAlt = "Mizzou Tier Course Ranker" division = "Web Scraping" languages = "JavaScript (Puppeteer)" title = "MizTier + MSTier" description = "Scraped course data off of the Mizzou and Missouri S and T’s course catalogues using Puppeteer. "/>
        <Project link = 'https://gabriellamiesner.github.io/crystal_qwr/' image = 'https://user-images.githubusercontent.com/51331370/146569955-bef5241b-0160-4302-bcc2-4a84a5f1d81f.png' imageAlt = "Colorful Queer Resource List" division = "Web Development" languages = "HTML + CSS" title = "Crystal QWR" description = "Designed and Developed website using HTML and CS. Compiled resources for queer people, with 3 focuses: survival, education, and advocacy. "/>
        <Project link = 'https://tts-intro-to-web-dev.gmiesner.repl.co/' image = 'https://user-images.githubusercontent.com/51331370/146570598-0614ea9d-a87d-4469-b4ba-2543ed9ed17a.png' imageAlt = "Blue Screen with Funny Resume Point" division = "Web Development" languages = "HTML, CSS, JavaScript" title = "Intro to Web Development Workshop" description = "Designed and Presented Intro to Web Development Workshop at SharkHack Simmons, TechTogether Boston 2021, TechTogether New York 2021, and TechTogether Seattle 2021 to around 100 hackers. Live-Coded Resume Speak website and answered technical questions."/>
   <hr />
        <Heading>
            Work Experience
        </Heading>
        <Job time = "May 2022 - August 2022" place = "Bank of America" division = "Front End Development + UX Design" languages = "" title = "Software Engineering Intern" description = "Designed and Built front end of desktop app using WPF and XAML technologies."/>
        <Job time = "October 2021 - April 2022" place = "Allter" division = "Web Development + UX Design" languages = "JavaScript (React), Figma" title = "Software Engineering Intern" description = "Designed and Built front end of web app using Figma and React. Created temporary business landing page using Bootstrap."/>
        <Job time = "September 2021 - October 2021" place = "Allter" division = "Data Visualization" languages = "Python (Plotly, Pandas)" title = "Data Science Intern" description = "Cleaned and Visualized 200k lines of relevant business data using Plotly, providing business insights for improving company strategy and pitch competitions."/>
        <Job time = "May 2021 - August 2021" place = "Union Pacific"  division = "Web Development + UX Design" languages = "JavaScript (Angular), Figma" title = "Software Engineering Intern" description = "Designed and Built front end of web app interfacing with Jira using Figma and Angular."/>

    </Grid>
  );
};

export default Home;
