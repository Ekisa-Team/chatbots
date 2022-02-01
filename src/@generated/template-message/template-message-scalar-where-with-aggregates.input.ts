import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class TemplateMessageScalarWhereWithAggregatesInput {

    @Field(() => [TemplateMessageScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<TemplateMessageScalarWhereWithAggregatesInput>;

    @Field(() => [TemplateMessageScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<TemplateMessageScalarWhereWithAggregatesInput>;

    @Field(() => [TemplateMessageScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<TemplateMessageScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    message?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    chatbotId?: IntWithAggregatesFilter;
}
