import { styled } from '@mui/material';
import { motion } from 'framer-motion';

const LoadingWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '100vh',
  stroke: '#6236FF',
  fill: '#6236FF',
});

const Loading = () => {
  return (
    <LoadingWrapper>
      <motion.svg
        xmlns='http://www.w3.org/2000/svg'
        width='92'
        height='92'
        viewBox='0 0 92 92'
      >
        <motion.g>
          <motion.path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M85.8311 70.3591c2.2762 4.5523-2.2762 10.8119-7.9667 7.3976 0 0-21.6238-14.2262-37.5572-20.4858l-9.6738 18.2096c-.569 1.7071-4.5524 4.5524-7.9667 2.2762-26.74524-15.3643-21.6238-45.5239 11.95-35.281l13.6572-26.1762c2.8452-4.5524 8.5357-3.4143 10.2429 0l27.3143 54.0596ZM29.4953 53.2876c-21.62383-6.2595-10.2429 8.5357-5.6905 11.381l5.6905-11.381Zm36.9881 3.9833L52.8263 31.6638l-7.3976 15.3643c5.1214 1.7071 16.5024 7.9666 21.0547 10.2428Z'
            strokeWidth={2}
            initial={{ fillOpacity: 0.2, pathLength: 0 }}
            animate={{
              fillOpacity: 1,
              pathLength: 1,
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: 'loop',
              repeatDelay: 0,
            }}
          />
        </motion.g>
      </motion.svg>
    </LoadingWrapper>
  );
};

export default Loading;
