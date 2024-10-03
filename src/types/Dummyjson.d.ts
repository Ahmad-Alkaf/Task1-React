import { User } from "./User";
import { Product } from "./Product";

/**
 * Dummy response structure. T is the type e.g., (User/Product) and K is the key to access the data e.g., ("users"/"products") 
 * 
 */
interface DummyResGetAll {
	limit: number;
	skip: number;
	total: number;
}

export interface UserGetAllResponse extends DummyResGetAll {
	users: User[];
}
export interface ProductGetAllResponse extends DummyResGetAll {
	products: Product[];
}