import { RatingRange, ReviewCard, ReviewStar } from '@core/ui/components';
interface Rating {
	rating: number;

	starDistribution: { [key: number]: number };
}

export default function Review({ rating }: { rating: Rating }) {
	const reviewcarddata = [
		{
			id: 1,
			rating: 4.5,
			name: 'Courtney Henry',
			date: '2024-12-20T10:00:00Z',
			comment:
				'Consequat velit qui adipisicing sunt do reprehenderit ad laborum tempor ullamco exercitation. Ullamco tempor adipisicing et voluptate duis sit esse aliqua.',
		},
		{
			id: 2,
			rating: 3.8,
			name: 'Alex Johnson',
			date: '2024-11-15T14:30:00Z',
			comment:
				'Occaecat sit magna nulla incididunt eiusmod culpa. Tempor aliquip laboris nostrud dolore exercitation labore laborum.',
		},
		{
			id: 3,
			rating: 5.0,
			name: 'Maria Garcia',
			date: '2024-12-10T08:45:00Z',
			comment:
				'Laboris minim nisi reprehenderit voluptate nulla aliqua magna velit elit consequat sunt officia. Amet cupidatat consectetur exercitation veniam.',
		},
		{
			id: 4,
			rating: 2.7,
			name: 'James Smith',
			date: '2024-10-05T09:15:00Z',
			comment:
				'Exercitation laboris consequat est laborum duis incididunt tempor minim laboris excepteur commodo. Minim veniam amet deserunt ipsum eiusmod.',
		},
		{
			id: 5,
			rating: 4.2,
			name: 'Emma Wilson',
			date: '2024-12-25T12:00:00Z',
			comment:
				'Sunt laboris culpa eiusmod exercitation reprehenderit. Dolor incididunt officia est ad aliqua do ipsum veniam pariatur nisi.',
		},
	];
	const starDistribution = {
		5: rating.starDistribution[5] || 0,
		4: rating.starDistribution[4] || 0,
		3: rating.starDistribution[3] || 0,
		2: rating.starDistribution[2] || 0,
		1: rating.starDistribution[1] || 0,
	};
	const totalReviews = Object.values(starDistribution).reduce(
		(total, count) => total + count,
		0,
	);

	const getPercentage = (starCount: number) => {
		return (
			((starDistribution[starCount as keyof typeof starDistribution] || 0) /
				totalReviews) *
			100
		);
	};
	return (
		<div>
			<div className='flex bg-background-100 p-12 items-center justify-center gap-12 mt-4 mb-7'>
				<div>
					<div className='flex justify-center items-center'>
						<p className='text-h6 mb-4 '>{rating.rating}</p>
					</div>
					<div>
						<ReviewStar value={rating.rating} />
					</div>
					<div>
						<p className='text-body1 flex justify-center items-center'>
							{totalReviews} Reviews
						</p>
					</div>
				</div>
				<div className='gap-5'>
					<div>
						<RatingRange value={5} range={getPercentage(5)} />
					</div>
					<div className='mt-2'>
						<RatingRange value={4} range={getPercentage(4)} />
					</div>
					<div>
						<RatingRange value={3} range={getPercentage(3)} />
					</div>
					<div>
						<RatingRange value={2} range={getPercentage(2)} />
					</div>
					<div>
						<RatingRange value={1} range={getPercentage(1)} />
					</div>
				</div>
			</div>
			<div>
				<p className='text-body1 font-bold'>Customer Review</p>
				{reviewcarddata?.map((review, index) => (
					<div key={review.id} className='mt-6 '>
						<ReviewCard
							key={review.id}
							rating={review.rating}
							name={review.name}
							date={review.date}
							comment={review.comment}
						/>
					</div>
				))}
			</div>
		</div>
	);
}
