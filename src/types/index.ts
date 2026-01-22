export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

export interface Customer {
  fullName: string;
  email: string;
  phone: string;
  address: string;
}

export interface Order {
  items: CartItem[];
  customer: Customer;
  total: number;
  status: 'pending' | 'confirmed' | 'paid' | 'shipped' | 'delivered';
  createdAt: string;
}
