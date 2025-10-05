import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';

function Homepage() {
    const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-orange-100 to-orange-300 text-center relative overflow-hidden">
      
      <h2 className="absolute top-6 text-6xl font-semibold text-orange-700 drop-shadow-md">
        जय श्री राम
      </h2>

      
      <motion.div
        className="absolute w-64 h-64 bg-orange-400 rounded-full opacity-20 top-10 left-10"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}/>

      <motion.div
        className="absolute w-80 h-80 bg-yellow-300 rounded-full opacity-10 bottom-20 right-20"
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}/>

     
      <motion.h1
        className="text-9xl text-orange-600 font-bold drop-shadow-lg"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}>
        ॐ
      </motion.h1>

      
      <p className="mt-6 text-xl text-orange-700 font-medium">
        Welcome to the Hanuman Chalisa Reader
      </p>

      <button
        onClick={() => {
            navigate('/chalisa');
        }}
        className="mt-10 px-8 py-3 bg-orange-600 text-white font-semibold rounded-full shadow-lg hover:bg-orange-700 transition-all">
        Read Hanuman Chalisa
      </button>
    </div>
  );
}

export default Homepage;