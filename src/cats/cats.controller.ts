import { Controller, Get, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { listCats } from './types';

@Controller('cats')
export class CatsController {
  @Post()
  create(): string {
    return 'This action adds a new cat';
  }
  @Get()
  findAll(@Req() request: Request, @Res() res: Response) {
    const cats: listCats = [{ name: 'string', age: 15 }];
    return res.json(cats);
  }
}
