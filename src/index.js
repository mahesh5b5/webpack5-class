import HelloWorldButton from './components/hello-world-button/hello-world-button';
import Heading from './components/heading/heading';

const helloWorldButton = new HelloWorldButton();
const heading = new Heading();
heading.render();
helloWorldButton.render();

if (process.env.NODE_ENV === 'production') {
  console.log('Production');
} else if (process.env.NODE_ENV === 'development') {
  console.log('Development');
}

helloWorldButton.doesntExist()