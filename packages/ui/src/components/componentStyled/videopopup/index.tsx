'use client';

import {
	Button,
	Modal,
	ModalBody,
	ModalContent,
	ModalFooter,
	ModalHeader,
	useDisclosure,
} from '@nextui-org/react';
import { Close } from 'assets';

interface Popupprops {
	SvgComponent: React.ReactNode;
	onclose: () => void;
}
export function Videopopup({ SvgComponent, onclose }: Popupprops) {
	return (
		<Modal className='w-full bg-danger'>
			<ModalContent>
				<ModalHeader className='flex'>
					Video
					<Button onPress={onclose}>{<Close />}</Button>
				</ModalHeader>
				<div></div>
			</ModalContent>
		</Modal>
	);
}
