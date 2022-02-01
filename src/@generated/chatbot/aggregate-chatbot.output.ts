import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ChatbotCountAggregate } from './chatbot-count-aggregate.output';
import { ChatbotAvgAggregate } from './chatbot-avg-aggregate.output';
import { ChatbotSumAggregate } from './chatbot-sum-aggregate.output';
import { ChatbotMinAggregate } from './chatbot-min-aggregate.output';
import { ChatbotMaxAggregate } from './chatbot-max-aggregate.output';

@ObjectType()
export class AggregateChatbot {

    @Field(() => ChatbotCountAggregate, {nullable:true})
    _count?: ChatbotCountAggregate;

    @Field(() => ChatbotAvgAggregate, {nullable:true})
    _avg?: ChatbotAvgAggregate;

    @Field(() => ChatbotSumAggregate, {nullable:true})
    _sum?: ChatbotSumAggregate;

    @Field(() => ChatbotMinAggregate, {nullable:true})
    _min?: ChatbotMinAggregate;

    @Field(() => ChatbotMaxAggregate, {nullable:true})
    _max?: ChatbotMaxAggregate;
}
