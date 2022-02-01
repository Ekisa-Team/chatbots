import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class ChatbotScalarWhereWithAggregatesInput {

    @Field(() => [ChatbotScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ChatbotScalarWhereWithAggregatesInput>;

    @Field(() => [ChatbotScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ChatbotScalarWhereWithAggregatesInput>;

    @Field(() => [ChatbotScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ChatbotScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    accessKey?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    appId?: IntWithAggregatesFilter;
}
