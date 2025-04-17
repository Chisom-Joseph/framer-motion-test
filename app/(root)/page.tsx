import Link from "next/link";
import * as motion from "motion/react-client";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center">
      <motion.div
        initial={{
          backgroundColor: "rgb(255, 0, 0)",
          opacity: 0,
          scale: 0,
          top: 200,
        }}
        animate={{
          background: "rgb(0, 255, 0)",
          opacity: 1,
          scale: 1,
          top: 100,
          transition: { duration: 0.6 },
        }}
        whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
        whileTap={{ scale: 0.9, transition: { duration: 0.2 } }}
      >
        <Link className="m-1o text-5xl underline" href="/blog">
          Go to blog
        </Link>
      </motion.div>
    </div>
  );
}
