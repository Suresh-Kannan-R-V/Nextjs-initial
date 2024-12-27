'use client';

interface IconProps {
	height?: number;
	width?: number;
	fill?: string;
}

export const LanguageIcon: React.FC<IconProps> = ({
	height = '14',
	width = '16',
	fill,
}) => (
	<svg
		width={12}
		height={16}
		viewBox='0 0 16 14'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
	>
		<title>Language Icon</title>
		<path
			d='M8.01318 0.80934C6.21576 0.817235 4.44231 1.00607 2.90124 1.34328C1.99212 1.54235 1.37067 2.12519 1.06213 2.86488C-0.28006 6.07962 -0.325118 10.3116 1.74218 13.1239C2.03608 13.524 2.48372 13.7503 2.91882 13.7501C3.35392 13.75 3.76525 13.5408 4.03174 13.192C4.30469 12.8348 4.44076 12.4991 4.59314 12.1604C8.05879 12.8004 10.8242 12.8058 13.826 11.9627C14.5767 11.7513 15.1548 11.1899 15.3696 10.4586C16.108 7.94516 16.0962 5.15278 14.9478 2.77699C14.6046 2.06625 14.0252 1.54171 13.2668 1.36195C11.6322 0.974701 9.8106 0.801444 8.01318 0.80934ZM8.01867 1.94093C9.7417 1.9335 11.4834 2.09658 13.0065 2.45729C13.4631 2.56553 13.6919 2.76275 13.9348 3.26588C14.9328 5.33047 14.9643 7.8497 14.2908 10.1422C14.1715 10.5483 13.9658 10.7544 13.5217 10.8794C10.5547 11.7128 7.9714 11.7219 4.39099 11.0134C4.26181 10.9878 4.12772 11.0082 4.01208 11.0713C3.89644 11.1343 3.80659 11.2359 3.75818 11.3584C3.59001 11.7858 3.4352 12.119 3.13745 12.5087C3.07599 12.5891 2.9956 12.6251 2.91882 12.6251C2.84204 12.6252 2.75798 12.6071 2.64856 12.4581C0.916734 10.1022 0.894405 6.18613 2.10034 3.29774C2.31268 2.78868 2.50971 2.58143 3.14184 2.44301C4.59046 2.12603 6.29526 1.94836 8.01867 1.94093ZM5.35009 2.93739C4.87872 2.93739 4.5857 3.1584 4.41076 3.64271L3.23742 6.8661C3.18511 7.01123 3.15173 7.15924 3.15173 7.26161C3.15173 7.62105 3.38556 7.83839 3.76806 7.83839C4.0915 7.83839 4.27238 7.67369 4.38769 7.2715L4.54919 6.76393H6.17736L6.33996 7.29017C6.44571 7.67942 6.62676 7.83729 6.97607 7.83729C7.32876 7.83729 7.58252 7.59697 7.58252 7.25722C7.58252 7.13234 7.55857 7.02079 7.50232 6.8661L6.31909 3.64271C6.1374 3.14828 5.84791 2.93739 5.35009 2.93739ZM5.33142 4.01845H5.35778L5.91479 5.85097H4.79089L5.33142 4.01845ZM10.8037 5.30495C10.6547 5.30727 10.5127 5.36862 10.4089 5.47552C10.3051 5.58242 10.248 5.72614 10.25 5.87514V6.43764H9.125C9.05046 6.43658 8.97645 6.45035 8.90728 6.47815C8.83812 6.50594 8.77516 6.54721 8.72208 6.59955C8.66899 6.65188 8.62684 6.71425 8.59807 6.78302C8.5693 6.85179 8.55449 6.92559 8.55449 7.00014C8.55449 7.07468 8.5693 7.14848 8.59807 7.21725C8.62684 7.28602 8.66899 7.34839 8.72208 7.40073C8.77516 7.45306 8.83812 7.49433 8.90728 7.52212C8.97645 7.54992 9.05046 7.56369 9.125 7.56264H10.718C10.7788 7.57268 10.8407 7.57268 10.9015 7.56264H11.1597C11.0961 7.78368 11.1205 7.84937 10.9619 8.13063C10.9106 8.22167 10.8185 8.284 10.7587 8.37013C10.725 8.34173 10.677 8.3169 10.6455 8.28883C10.5413 8.19506 10.4058 8.14359 10.2655 8.14452C10.1253 8.14545 9.99051 8.19872 9.88752 8.29387C9.78453 8.38902 9.72079 8.5192 9.70878 8.65891C9.69678 8.79861 9.73738 8.93776 9.82263 9.04909C9.60437 9.13009 9.42614 9.25014 9.125 9.25014C9.05046 9.24908 8.97645 9.26285 8.90728 9.29065C8.83812 9.31844 8.77516 9.35971 8.72208 9.41205C8.66899 9.46438 8.62684 9.52675 8.59807 9.59552C8.5693 9.66429 8.55449 9.73809 8.55449 9.81264C8.55449 9.88718 8.5693 9.96098 8.59807 10.0298C8.62684 10.0985 8.66899 10.1609 8.72208 10.2132C8.77516 10.2656 8.83812 10.3068 8.90728 10.3346C8.97645 10.3624 9.05046 10.3762 9.125 10.3751C9.83085 10.3751 10.4076 10.1608 10.8696 9.84999C11.3438 10.1418 11.8795 10.2116 12.4553 9.92165C12.6578 9.7328 12.7919 9.45345 12.7572 9.16391C12.7226 8.87438 12.5218 8.62764 12.2854 8.54831C11.8361 8.33644 11.2545 8.21553 10.8037 8.30495Z'
			fill={fill}
		/>
	</svg>
);