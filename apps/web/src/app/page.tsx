'use client';
import { redirect } from 'next/navigation';

type LabelData = {
	label: string;
	values: string[];
};

export default function Page() {
	redirect('/explore');

	// return null;
}
