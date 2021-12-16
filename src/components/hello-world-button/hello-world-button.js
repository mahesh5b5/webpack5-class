import './hello-world-button.scss';

class HelloWorldButton {
  buttonClassName = 'hello-world-button'
  render() {
    const button = document.createElement('button');
    button.innerHTML = 'Hello world';
    button.classList.add(this.buttonClassName);
    const body = document.querySelector('body');
    button.onclick = function () {
      const p = document.createElement('p');
      p.innerHTML = 'Hello world';
      p.classList.add('hello-world-text');
      body.appendChild(p);
    }
    body.appendChild(button);
  }
}

export default HelloWorldButton;