export const fadeInOut = {
	hidden: {
		opacity: 0,
	},
	show: {
		opacity: 1,
		transition: {
			duration: 0.75,
		},
	},
	exit: {
		opacity: 0,
		transition: {
			duration: 0.75,
		},
	},
};

export const popInOut = {
	hidden: {
		opacity: 0,
		scale: 0.5,
	},
	show: {
		opacity: 1,
		scale: 1,
		transition: {
			duration: 0.75,
		},
	},
	exit: {
		opacity: 0,
		scale: 0.5,
		transition: {
			duration: 0.75,
		},
	},
};

export const waveContainer = {
	start: {
		transition: {
			staggerChildren: 0.1,
		},
	},
	end: {
		transition: {
			staggerChildren: 0.1,
		},
	},
};

export const waveCircle = {
	start: {
		y: '0%',
	},
	end: {
		y: '100%',
	},
};

export const bounceTransition = {
	duration: 0.4,
	repeat: Infinity,
	repeatType: 'reverse',
	ease: 'easeIn',
};
