import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Req,
  Res,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { CreateCustomerDto } from 'src/customers/dtos/CreateCustomer.dto';
import { CustomersService } from 'src/customers/services/customers/customers.service';

@Controller('customers')
export class CustomersController {
  constructor(private CustomersService: CustomersService) {}
  @Get(':id')
  getCustomer(
    @Param('id', ParseIntPipe) id: number,
    @Req() req: Request,
    @Res() res: Response,
  ) {
    // console.log(typeof id);

    const customer = this.CustomersService.findCustomerByID(id);

    if (customer) {
      res.send(customer);
      // default is 200
    } else {
      res.status(400).send({ msg: 'Customer not found' });
    }
  }

  // nestjs way..
  @Get('search/:id')
  searchUserByID(@Param('id', ParseIntPipe) id: number) {
    const customer = this.CustomersService.findCustomerByID(id);
    if (customer) return customer;
    else throw new HttpException('Customer not found', HttpStatus.NOT_FOUND);
  }

  @Get('')
  getAllCustomers() {
    return this.CustomersService.getAllCustomers();
  }

  @Post('create')
  @UsePipes(ValidationPipe)
  createCustomer(@Body() createCustomerDto: CreateCustomerDto) {
    console.log(createCustomerDto);
    this.CustomersService.createCustomer(createCustomerDto);
  }
}
