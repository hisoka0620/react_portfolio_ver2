import { motion } from "framer-motion";

function Home() {
  return (
    <div className="main-wrapper">
      <motion.div animate={{scale: [1, 1.5, 1]}}>
        <h1 className="main-title">ようこそ！<br />私のホームページへ！</h1>
      </motion.div>
      <motion.div>
      <button className="btn"><a href="/about" className="next-btn">自己紹介</a></button>
      </motion.div>
    </div>
  )
}

export default Home;