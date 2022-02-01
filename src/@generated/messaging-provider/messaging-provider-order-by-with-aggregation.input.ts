import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { MessagingProviderCountOrderByAggregateInput } from './messaging-provider-count-order-by-aggregate.input';
import { MessagingProviderAvgOrderByAggregateInput } from './messaging-provider-avg-order-by-aggregate.input';
import { MessagingProviderMaxOrderByAggregateInput } from './messaging-provider-max-order-by-aggregate.input';
import { MessagingProviderMinOrderByAggregateInput } from './messaging-provider-min-order-by-aggregate.input';
import { MessagingProviderSumOrderByAggregateInput } from './messaging-provider-sum-order-by-aggregate.input';

@InputType()
export class MessagingProviderOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => MessagingProviderCountOrderByAggregateInput, {nullable:true})
    _count?: MessagingProviderCountOrderByAggregateInput;

    @Field(() => MessagingProviderAvgOrderByAggregateInput, {nullable:true})
    _avg?: MessagingProviderAvgOrderByAggregateInput;

    @Field(() => MessagingProviderMaxOrderByAggregateInput, {nullable:true})
    _max?: MessagingProviderMaxOrderByAggregateInput;

    @Field(() => MessagingProviderMinOrderByAggregateInput, {nullable:true})
    _min?: MessagingProviderMinOrderByAggregateInput;

    @Field(() => MessagingProviderSumOrderByAggregateInput, {nullable:true})
    _sum?: MessagingProviderSumOrderByAggregateInput;
}
