import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "./hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

interface Props {
	testimonial: string;
	name: string;
	designation: string;
	company: string;
	image: string;
	index: number;
}

const FeedbackCard: React.FC<Props> = ({
	index,
	testimonial,
	name,
	designation,
	company,
	image,
}) => (
	<motion.div
		variants={fadeIn("", "spring", index * 0.5, 0.75)}
		className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full"
	>
		<p className="text-white font-black text-[48px]">
			<svg
				aria-hidden="true"
				className="w-10 h-10 text-gray-400 dark:text-gray-600"
				viewBox="0 0 24 27"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
					fill="currentColor"
				/>
			</svg>
		</p>

		<div className="mt-1">
			<p className="text-white tracking-wide text-[18px]">{testimonial}</p>
			<div className="mt-7 flex justify-between items-center gap-1">
				<div className="flex-1 flex flex-col">
					<p className="text-white font-medium text-[16px]">
						<span className="blue-text-gradient">@</span> {name}
					</p>
					<p className="mt-1 text-secondary text-[12px]">
						{designation} of {company}
					</p>
				</div>
				<img
					src={image}
					alt={`feedback-by-${name}`}
					className="w-10 h-10 rounded-full object-cover"
				/>
			</div>
		</div>
	</motion.div>
);

const Feedback: React.FC = () => {
	return (
		<div className="mt-12 bg-black-100 rounded-[20px]">
			<div
				className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px] `}
			>
				<motion.div variants={textVariant()}>
					<p className={styles.sectionSubText}>What others say</p>
					<h2 className={styles.sectionHeadText}>Testimonials.</h2>
				</motion.div>
			</div>
			<div className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-7`}>
				{testimonials.map((testimonial, index) => (
					<FeedbackCard key={testimonial.name} index={index} {...testimonial} />
				))}
			</div>
		</div>
	);
};

export default () => <SectionWrapper Component={Feedback} idName="" />;
