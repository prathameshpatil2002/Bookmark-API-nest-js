import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Bookmark {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  description: string;

  @Prop()
  userId: string;
}

export const BookmarkSchema = SchemaFactory.createForClass(Bookmark);
