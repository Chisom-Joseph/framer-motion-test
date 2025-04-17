import * as motion from "motion/react-client";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

export default function Template({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
    >
      <Header />
      {children}
      <Footer />
    </motion.div>
  );
}
