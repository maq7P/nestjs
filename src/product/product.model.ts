export class ProductModel {
	_id: string;
	image: string;
	title: string;
	prise: number;
	oldPrice: number;
	credit: number;
	calculatedReting: number;
	description: string;
	adventages: string;
	disAdventages: string;
	categories: string[];
	tags: string;
	characteristics: Record<string, string>;
}
