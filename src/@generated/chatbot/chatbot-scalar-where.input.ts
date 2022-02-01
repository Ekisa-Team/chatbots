import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class ChatbotScalarWhereInput {

    @Field(() => [ChatbotScalarWhereInput], {nullable:true})
    AND?: Array<ChatbotScalarWhereInput>;

    @Field(() => [ChatbotScalarWhereInput], {nullable:true})
    OR?: Array<ChatbotScalarWhereInput>;

    @Field(() => [ChatbotScalarWhereInput], {nullable:true})
    NOT?: Array<ChatbotScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    accessKey?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => IntFilter, {nullable:true})
    appId?: IntFilter;
}
