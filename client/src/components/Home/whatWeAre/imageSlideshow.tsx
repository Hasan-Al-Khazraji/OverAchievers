import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const imgs = ["slides/img1.png", "slides/img2.png", "slides/img3.png"];

const ImageSlideShow = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((state) => {
        if (state >= imgs.length - 1) return 0;
        return state + 1;
      });
    }, 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="flex w-full items-center justify-center py-4 text-center">
      <AnimatePresence>
        <motion.div
          className="absolute"
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ ease: "easeInOut", duration: 0.5 }}
        >
          <img src={imgs[index]} />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default ImageSlideShow;
