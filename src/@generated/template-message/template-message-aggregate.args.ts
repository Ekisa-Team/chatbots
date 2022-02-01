import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TemplateMessageWhereInput } from './template-message-where.input';
import { TemplateMessageOrderByWithRelationInput } from './template-message-order-by-with-relation.input';
import { TemplateMessageWhereUniqueInput } from './template-message-where-unique.input';
import { Int } from '@nestjs/graphql';
import { TemplateMessageCountAggregateInput } from './template-message-count-aggregate.input';
import { TemplateMessageAvgAggregateInput } from './template-message-avg-aggregate.input';
import { TemplateMessageSumAggregateInput } from './template-message-sum-aggregate.input';
import { TemplateMessageMinAggregateInput } from './template-message-min-aggregate.input';
import { TemplateMessageMaxAggregateInput } from './template-message-max-aggregate.input';

@ArgsType()
export class TemplateMessageAggregateArgs {

    @Field(() => TemplateMessageWhereInput, {nullable:true})
    where?: TemplateMessageWhereInput;

    @Field(() => [TemplateMessageOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<TemplateMessageOrderByWithRelationInput>;

    @Field(() => TemplateMessageWhereUniqueInput, {nullable:true})
    cursor?: TemplateMessageWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => TemplateMessageCountAggregateInput, {nullable:true})
    _count?: TemplateMessageCountAggregateInput;

    @Field(() => TemplateMessageAvgAggregateInput, {nullable:true})
    _avg?: TemplateMessageAvgAggregateInput;

    @Field(() => TemplateMessageSumAggregateInput, {nullable:true})
    _sum?: TemplateMessageSumAggregateInput;

    @Field(() => TemplateMessageMinAggregateInput, {nullable:true})
    _min?: TemplateMessageMinAggregateInput;

    @Field(() => TemplateMessageMaxAggregateInput, {nullable:true})
    _max?: TemplateMessageMaxAggregateInput;
}
