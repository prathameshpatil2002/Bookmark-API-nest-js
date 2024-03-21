import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Bookmark } from 'src/schemas';

@Injectable({})
export class BookmarkService {
  constructor(@InjectModel('Bookmark') private Bookmark: Model<Bookmark>) {}
}
