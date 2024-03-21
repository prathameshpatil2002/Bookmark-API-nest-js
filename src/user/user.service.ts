import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/schemas';

@Injectable({})
export class UserService {
  constructor(@InjectModel('User') private User: Model<User>) {}
}
