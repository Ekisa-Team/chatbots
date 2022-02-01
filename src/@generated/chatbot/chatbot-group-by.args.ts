import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ChatbotWhereInput } from './chatbot-where.input';
import { ChatbotOrderByWithAggregationInput } from './chatbot-order-by-with-aggregation.input';
import { ChatbotScalarFieldEnum } from './chatbot-scalar-field.enum';
import { ChatbotScalarWhereWithAggregatesInput } from './chatbot-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { ChatbotCountAggregateInput } from './chatbot-count-aggregate.input';
import { ChatbotAvgAggregateInput } from './chatbot-avg-aggregate.input';
import { ChatbotSumAggregateInput } from './chatbot-sum-aggregate.input';
import { ChatbotMinAggregateInput } from './chatbot-min-aggregate.input';
import { ChatbotMaxAggregateInput } from './chatbot-max-aggregate.input';

@ArgsType()
export class ChatbotGroupByArgs {

    @Field(() => ChatbotWhereInput, {nullable:true})
    where?: ChatbotWhereInput;

    @Field(() => [ChatbotOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ChatbotOrderByWithAggregationInput>;

    @Field(() => [ChatbotScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof ChatbotScalarFieldEnum>;

    @Field(() => ChatbotScalarWhereWithAggregatesInput, {nullable:true})
    having?: ChatbotScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ChatbotCountAggregateInput, {nullable:true})
    _count?: ChatbotCountAggregateInput;

    @Field(() => ChatbotAvgAggregateInput, {nullable:true})
    _avg?: ChatbotAvgAggregateInput;

    @Field(() => ChatbotSumAggregateInput, {nullable:true})
    _sum?: ChatbotSumAggregateInput;

    @Field(() => ChatbotMinAggregateInput, {nullable:true})
    _min?: ChatbotMinAggregateInput;

    @Field(() => ChatbotMaxAggregateInput, {nullable:true})
    _max?: ChatbotMaxAggregateInput;
}
