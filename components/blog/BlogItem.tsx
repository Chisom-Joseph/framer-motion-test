import * as motion from "motion/react-client";
import Link from "next/link";

export default function BlogItem({ post }: { post: any }) {
  return (
    <motion.div
      className="mb-3 font-bold bg-purple-300 border-purple-500 border-2 rounded cursor-pointer"
      whileHover={{
        scale: 1.08,
        transition: { duration: 0.3 },
      }}
    >
      <Link className="p-5 block" href={`/blog/${post.id}`}>
        {post.title}
      </Link>
    </motion.div>
  );
}
