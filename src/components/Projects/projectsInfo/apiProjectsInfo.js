import timestampImage from './images/timestamp.png';
import metricImperialConverterImage from './images/metric-imperial-converter.png';
import requestHeaderImage from './images/request-header.png';
import fileMetadataImage from './images/file-metadata.png';
import exerciseTrackerImage from './images/exercise-tracker.png';

export default [
  {
    title: 'timestamp',
    subtitle: 'node + express | cors | digitalocean + dokku | git',
    image: timestampImage,
    text: 'GET a timestamp',
    demo: 'https://timestamp.andrew-horn-portfolio.life/',
    github: 'https://github.com/sophyphreak/timestamp'
  },
  {
    title: 'metric-imperial-converter',
    subtitle: 'express + node | helmet | lodash | mathjs | expect + mocha + supertest | digitalocean + dokku | git',
    image: metricImperialConverterImage,
    text: 'GET unit conversion',
    demo: 'https://metric-imperial-converter.andrew-horn-portfolio.life/',
    github: 'https://github.com/sophyphreak/metric-imperial-converter'
  },
  {
    title: 'request-header-parser',
    subtitle: 'node + express | digitalocean + dokku | git',
    image: requestHeaderImage,
    text: 'GET some information about your header',
    demo: 'https://request-header.andrew-horn-portfolio.life/',
    github: 'https://github.com/sophyphreak/request-header'
  },
  {
    title: 'file-metadata',
    subtitle: 'node + express | body-parser | lodash | multer | path | digitalocean + dokku | git',
    image: fileMetadataImage,
    text: 'POST your file to get some metadata about it back',
    demo: 'https://file-metadata.andrew-horn-portfolio.life/',
    github: 'https://github.com/sophyphreak/file-metadata'
  },
  {
    title: 'exercise-tracker',
    subtitle: 'node + expres | body-parser | cors | dotenv | lodash | moment | mongodb + mongoose | path | shortid | expect + mocha + supertest | digitalocean + dokku | git',
    image: exerciseTrackerImage,
    text: 'POST to create new users and their exercises, then GET a list of a user\'s exercises',
    demo: 'https://exercise-tracker.andrew-horn-portfolio.life/',
    github: 'https://github.com/sophyphreak/exercise-tracker'
  },
]