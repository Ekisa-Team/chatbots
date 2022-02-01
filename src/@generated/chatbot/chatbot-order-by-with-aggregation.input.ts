import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ChatbotCountOrderByAggregateInput } from './chatbot-count-order-by-aggregate.input';
import { ChatbotAvgOrderByAggregateInput } from './chatbot-avg-order-by-aggregate.input';
import { ChatbotMaxOrderByAggregateInput } from './chatbot-max-order-by-aggregate.input';
import { ChatbotMinOrderByAggregateInput } from './chatbot-min-order-by-aggregate.input';
import { ChatbotSumOrderByAggregateInput } from './chatbot-sum-order-by-aggregate.input';

@InputType()
export class ChatbotOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    accessKey?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    appId?: keyof typeof SortOrder;

    @Field(() => ChatbotCountOrderByAggregateInput, {nullable:true})
    _count?: ChatbotCountOrderByAggregateInput;

    @Field(() => ChatbotAvgOrderByAggregateInput, {nullable:true})
    _avg?: ChatbotAvgOrderByAggregateInput;

    @Field(() => ChatbotMaxOrderByAggregateInput, {nullable:true})
    _max?: ChatbotMaxOrderByAggregateInput;

    @Field(() => ChatbotMinOrderByAggregateInput, {nullable:true})
    _min?: ChatbotMinOrderByAggregateInput;

    @Field(() => ChatbotSumOrderByAggregateInput, {nullable:true})
    _sum?: ChatbotSumOrderByAggregateInput;
}
