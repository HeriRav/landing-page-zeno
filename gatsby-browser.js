import "./src/styles/global.css"
import AOS from 'aos';
import 'aos/dist/aos.css';

export const onClientEntry = () => {
  AOS.init({
    duration: 600, // durée des animations en ms
  });
};