import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ChatbotOrderByRelationAggregateInput } from '../chatbot/chatbot-order-by-relation-aggregate.input';

@InputType()
export class AppOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => ChatbotOrderByRelationAggregateInput, {nullable:true})
    chatbots?: ChatbotOrderByRelationAggregateInput;
}
