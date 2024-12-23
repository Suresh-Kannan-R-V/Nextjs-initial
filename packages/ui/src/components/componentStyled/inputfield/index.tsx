'use client';
import { Textarea } from '@nextui-org/input';

export const Inputfield = (props: { description: string }) => {
	return (
		<Textarea
			type='text'
			placeholder={props?.description}
			minRows={10}
			className='w-[35rem]'
			style={{
				height: '6.5rem',
				backgroundColor: 'green',
				fontSize: '18px',
				padding: '5px',
				borderColor: '2px solid red',
			}}
			disableAutosize={true}
			fullWidth={false}
			disableAnimation={true}
		/>

		// <textarea
		// placeholder={props.description}
		// className="w-[35rem] h-[6.5rem] border border-[#D9D9D9] rounded-[10px] p-4 text-black bg-white  resize-none outline-none placeholder-[#555555]"
		// />
	);
};
