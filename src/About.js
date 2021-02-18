import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

function About(){
  return(
          <motion.div
              initial="hidden"
              animate="visible"
              transition={{ duration: 2}}
              variants={variants}
              >
            <div className="introduce-wrapper">
              <div className="container">
                <h1 className="title introduce-title">自己紹介</h1>
                <ul className="introduce-list">
                  <li>・初めまして！私の名前は上野健太と申します。平成7年生まれ鹿児島県出身です。</li>
                  <li>・学生時代は主にC言語、Java、SQL、VB、アルゴリズム、組み込み制御等の勉強をしておりました。
                  </li>
                  <li>・社会人になってからは2年程、派遣会社で半導体や電気系の仕事をやったり、他にはアルバイトなどをして生活しておりました。</li>
                </ul>
                <button className="btn genjou-btn"><a href="/do" className="next-btn">現状と目標</a></button>
              </div>
            </div>
          </motion.div>
        )
}       

export default About;