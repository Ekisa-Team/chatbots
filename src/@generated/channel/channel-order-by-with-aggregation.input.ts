import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ChannelCountOrderByAggregateInput } from './channel-count-order-by-aggregate.input';
import { ChannelAvgOrderByAggregateInput } from './channel-avg-order-by-aggregate.input';
import { ChannelMaxOrderByAggregateInput } from './channel-max-order-by-aggregate.input';
import { ChannelMinOrderByAggregateInput } from './channel-min-order-by-aggregate.input';
import { ChannelSumOrderByAggregateInput } from './channel-sum-order-by-aggregate.input';

@InputType()
export class ChannelOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    cellphone?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    accountSid?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    authToken?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    httpVerb?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    callbackUrl?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    messagingProviderId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    chatbotId?: keyof typeof SortOrder;

    @Field(() => ChannelCountOrderByAggregateInput, {nullable:true})
    _count?: ChannelCountOrderByAggregateInput;

    @Field(() => ChannelAvgOrderByAggregateInput, {nullable:true})
    _avg?: ChannelAvgOrderByAggregateInput;

    @Field(() => ChannelMaxOrderByAggregateInput, {nullable:true})
    _max?: ChannelMaxOrderByAggregateInput;

    @Field(() => ChannelMinOrderByAggregateInput, {nullable:true})
    _min?: ChannelMinOrderByAggregateInput;

    @Field(() => ChannelSumOrderByAggregateInput, {nullable:true})
    _sum?: ChannelSumOrderByAggregateInput;
}
