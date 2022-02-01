import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TemplateMessageWhereInput } from './template-message-where.input';
import { TemplateMessageOrderByWithAggregationInput } from './template-message-order-by-with-aggregation.input';
import { TemplateMessageScalarFieldEnum } from './template-message-scalar-field.enum';
import { TemplateMessageScalarWhereWithAggregatesInput } from './template-message-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { TemplateMessageCountAggregateInput } from './template-message-count-aggregate.input';
import { TemplateMessageAvgAggregateInput } from './template-message-avg-aggregate.input';
import { TemplateMessageSumAggregateInput } from './template-message-sum-aggregate.input';
import { TemplateMessageMinAggregateInput } from './template-message-min-aggregate.input';
import { TemplateMessageMaxAggregateInput } from './template-message-max-aggregate.input';

@ArgsType()
export class TemplateMessageGroupByArgs {

    @Field(() => TemplateMessageWhereInput, {nullable:true})
    where?: TemplateMessageWhereInput;

    @Field(() => [TemplateMessageOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<TemplateMessageOrderByWithAggregationInput>;

    @Field(() => [TemplateMessageScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof TemplateMessageScalarFieldEnum>;

    @Field(() => TemplateMessageScalarWhereWithAggregatesInput, {nullable:true})
    having?: TemplateMessageScalarWhereWithAggregatesInput;

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
