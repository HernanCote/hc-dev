import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';

const useScroll = () => {
  const controls = useAnimation();
  const [element, view] = useInView({ threshold: 0.25 });

  if (view) {
    controls.start('show');
  } else {
    controls.start('hidden');
  }

  return [element, controls];
};

export {
  // eslint-disable-next-line import/prefer-default-export
  useScroll,
};
