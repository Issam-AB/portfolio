import { motion } from "framer-motion";
import React from "react";
import { styles } from "../../styles";
import { staggerContainer } from "../../utils/motion";

type Props = {
	Component: React.FC;
	idName: string;
};

const SectionWrapper: React.FC<Props> = ({ Component, idName }) => {
	const Hoc: React.FC = () => (
		<motion.div
			variants={staggerContainer()}
			initial="hidden"
			whileInView="show"
			viewport={{ once: true, amount: 0.25 }}
			className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
		>
			<Component />
		</motion.div>
	);
	return <Hoc />;
};

export default SectionWrapper;
