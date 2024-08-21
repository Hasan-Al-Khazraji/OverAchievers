import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const text = ['hilarious', 'Innovative', 'breakout', 'skilled', 'creative', 'brilliant', 'loved', 'entertaining']

const TextRotate = () => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((state) => {
        if (state >= text.length - 1) return 0
        return state + 1
      })
    }, 2000)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="relative flex w-full items-center py-4 text-center">
      <AnimatePresence>
        <motion.div
          className="absolute cursor-pointer text-xl md:text-6xl font-Arcade tracking-tight text-green-400 bg-[#011611] p-4"
          key={index}
          initial={{ y: 43, opacity: 1, rotateX: -90 }}
          animate={{ y: 0, opacity: 1, rotateX: 0 }}
          exit={{ y: -43, opacity: 1, rotateX: 90 }}
          transition={{ ease: 'easeInOut', delay: 0.2, duration: 0.5 }}
        >
          {text[index]}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default TextRotate