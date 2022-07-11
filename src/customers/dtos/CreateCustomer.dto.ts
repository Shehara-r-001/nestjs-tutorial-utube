import { Type } from 'class-transformer';
import {
  IsNumberString,
  IsEmail,
  IsNotEmpty,
  ValidateNested,
  IsNotEmptyObject,
} from 'class-validator';
import { CreateAddressDto } from './CreateAddress.dto';

export class CreateCustomerDto {
  @IsNumberString()
  id: number;

  @IsEmail()
  email: string;

  @IsNotEmpty()
  name: string;

  @IsNotEmptyObject()
  @ValidateNested() // to validate nested objects
  @Type(() => CreateAddressDto)
  address: CreateAddressDto;
}
