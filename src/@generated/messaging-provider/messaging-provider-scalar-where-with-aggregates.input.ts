import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class MessagingProviderScalarWhereWithAggregatesInput {

    @Field(() => [MessagingProviderScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<MessagingProviderScalarWhereWithAggregatesInput>;

    @Field(() => [MessagingProviderScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<MessagingProviderScalarWhereWithAggregatesInput>;

    @Field(() => [MessagingProviderScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<MessagingProviderScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;
}
