import timestampImage from './images/timestamp.png';
import metricImperialConverterImage from './images/metric-imperial-converter.png';
import requestHeaderImage from './images/request-header.png';
import fileMetadataImage from './images/file-metadata.png';
import exerciseTrackerImage from './images/exercise-tracker.png';

export default [
  {
    title: 'timestamp',
    image: timestampImage,
    subtitle: 'GET a timestamp',
    text: 'node + express | cors | digitalocean + dokku | git',
    demo: 'https://timestamp.andrew-horn-portfolio.life/',
    github: 'https://github.com/sophyphreak/timestamp'
  },
  {
    title: 'metric-imperial-converter',
    image: metricImperialConverterImage,
    subtitle: 'GET unit conversion',
    text:
      'express + node | helmet | lodash | mathjs | expect + mocha + supertest | digitalocean + dokku | git',
    demo: 'https://metric-imperial-converter.andrew-horn-portfolio.life/',
    github: 'https://github.com/sophyphreak/metric-imperial-converter'
  },
  {
    title: 'request-header-parser',
    image: requestHeaderImage,
    subtitle: 'GET some information about your header',
    text: 'node + express | digitalocean + dokku | git',
    demo: 'https://request-header.andrew-horn-portfolio.life/',
    github: 'https://github.com/sophyphreak/request-header'
  },
  {
    title: 'file-metadata',
    image: fileMetadataImage,
    subtitle: 'POST your file to get some metadata about it back',
    text:
      'node + express | body-parser | lodash | multer | path | digitalocean + dokku | git',
    demo: 'https://file-metadata.andrew-horn-portfolio.life/',
    github: 'https://github.com/sophyphreak/file-metadata'
  },
  {
    title: 'exercise-tracker',
    image: exerciseTrackerImage,
    subtitle:
      "POST to create new users and their exercises, then GET a list of a user's exercises",
    text:
      'node + expres | body-parser | cors | dotenv | lodash | moment | mongodb + mongoose | path | shortid | expect + mocha + supertest | digitalocean + dokku | git',
    demo: 'https://exercise-tracker.andrew-horn-portfolio.life/',
    github: 'https://github.com/sophyphreak/exercise-tracker'
  }
];
