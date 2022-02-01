import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { TemplateMessageCountAggregate } from './template-message-count-aggregate.output';
import { TemplateMessageAvgAggregate } from './template-message-avg-aggregate.output';
import { TemplateMessageSumAggregate } from './template-message-sum-aggregate.output';
import { TemplateMessageMinAggregate } from './template-message-min-aggregate.output';
import { TemplateMessageMaxAggregate } from './template-message-max-aggregate.output';

@ObjectType()
export class TemplateMessageGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    message!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => Int, {nullable:false})
    chatbotId!: number;

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
