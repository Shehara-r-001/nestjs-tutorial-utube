import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from 'src/customers/dtos/CreateCustomer.dto';
import { Customer } from 'src/customers/types/customer';

@Injectable()
export class CustomersService {
  private customers: Customer[] = [
    {
      id: 1,
      email: '111@gmail.com',
      name: 'Mr. One',
      // createdAt: new Date(),
    },
    {
      id: 2,
      email: '222@gmail.com',
      name: 'Mr. Two',
      // createdAt: new Date(),
    },
    {
      id: 3,
      email: '333@gmail.com',
      name: 'Mr. Three',
      // createdAt: new Date(),
    },
  ];

  findCustomerByID(id: number) {
    return this.customers.find((user) => user.id === id);
  }

  getAllCustomers() {
    return this.customers;
  }

  createCustomer(customerDto: CreateCustomerDto) {
    this.customers.push(customerDto);
  }
}
