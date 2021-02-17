import jujutsukaisen from './img/jujutsukaisen.jpg';
import apex from './img/apex.jpg';
import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

function Hobby(){
    const anime_image = jujutsukaisen;
    const game_image = apex;
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      transition={{ duration: 2 }}
      variants={variants}
    >
    <div className="hobby-wrapper">
      <h1 className="hobby-title title">趣味</h1>
      <ul className="hobby-contents-wrapper">
        <li className="hobby-contents anime-contents">
          <img className="anime-image image" src={anime_image} alt="jujutsukaisen"/>
          <p>アニメ鑑賞</p>
        </li>
        <li className="hobby-contents">
          <img className="game-image image" src={game_image} alt="apex"/>
          <p>ゲーム</p>
        </li>
      </ul>
      <p class="etc-wrapper">他にも学生時代にテニスや野球をしておりました。あとプログラミングとネットサーフィン...</p>
      <button className="btn opus-btn"><a href="/opus" className="next-btn">作品</a></button>
    </div>
    </motion.div>
  )
}

export default Hobby;