import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { TemplateMessageCountAggregate } from './template-message-count-aggregate.output';
import { TemplateMessageAvgAggregate } from './template-message-avg-aggregate.output';
import { TemplateMessageSumAggregate } from './template-message-sum-aggregate.output';
import { TemplateMessageMinAggregate } from './template-message-min-aggregate.output';
import { TemplateMessageMaxAggregate } from './template-message-max-aggregate.output';

@ObjectType()
export class AggregateTemplateMessage {

    @Field(() => TemplateMessageCountAggregate, {nullable:true})
    _count?: TemplateMessageCountAggregate;

    @Field(() => TemplateMessageAvgAggregate, {nullable:true})
    _avg?: TemplateMessageAvgAggregate;

    @Field(() => TemplateMessageSumAggregate, {nullable:true})
    _sum?: TemplateMessageSumAggregate;

    @Field(() => TemplateMessageMinAggregate, {nullable:true})
    _min?: TemplateMessageMinAggregate;

    @Field(() => TemplateMessageMaxAggregate, {nullable:true})
    _max?: TemplateMessageMaxAggregate;
}
