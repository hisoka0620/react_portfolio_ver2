import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

function Do(){
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      transition={{ duration: 2 }}
      variants={variants}
    >
    <div className="doing-wrapper">
      <h1 className="title">現状と目標</h1>
      <ul className="doing-list">
        <li>・現在、フロントエンドエンジニアを目指しており、JavaScript、Reactを主に独学で勉強しております。モダンなweb技術に興味がありこれから他のlibraryやFWにも挑戦したいと思っています。</li>
        <li>・HTML、CSS、JS(jQuery)のアニメーション等の基本的な事はできます。</li>
        <li>・バックエンドにも興味があり、Node、MySQLの知識も多少あり、最終的にはフルスタックエンジニアになることが目標です。</li>
      </ul>
      <button className="btn hobby-btn"><a className="next-btn" href="/hobby">趣味</a></button>
    </div>
    </motion.div>
  )
}

export default Do;