import { HttpException, HttpStatus } from '@nestjs/common';

export class UserNotFoundException extends HttpException {
  constructor(msg?: string, statusCode?: HttpStatus) {
    super(msg || 'User not found', statusCode || HttpStatus.BAD_REQUEST);
    // if msg or code has not passed, default will be sent
  }
}
