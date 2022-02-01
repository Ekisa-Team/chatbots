import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MessagingProviderWhereInput } from './messaging-provider-where.input';
import { MessagingProviderOrderByWithAggregationInput } from './messaging-provider-order-by-with-aggregation.input';
import { MessagingProviderScalarFieldEnum } from './messaging-provider-scalar-field.enum';
import { MessagingProviderScalarWhereWithAggregatesInput } from './messaging-provider-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { MessagingProviderCountAggregateInput } from './messaging-provider-count-aggregate.input';
import { MessagingProviderAvgAggregateInput } from './messaging-provider-avg-aggregate.input';
import { MessagingProviderSumAggregateInput } from './messaging-provider-sum-aggregate.input';
import { MessagingProviderMinAggregateInput } from './messaging-provider-min-aggregate.input';
import { MessagingProviderMaxAggregateInput } from './messaging-provider-max-aggregate.input';

@ArgsType()
export class MessagingProviderGroupByArgs {

    @Field(() => MessagingProviderWhereInput, {nullable:true})
    where?: MessagingProviderWhereInput;

    @Field(() => [MessagingProviderOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<MessagingProviderOrderByWithAggregationInput>;

    @Field(() => [MessagingProviderScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof MessagingProviderScalarFieldEnum>;

    @Field(() => MessagingProviderScalarWhereWithAggregatesInput, {nullable:true})
    having?: MessagingProviderScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => MessagingProviderCountAggregateInput, {nullable:true})
    _count?: MessagingProviderCountAggregateInput;

    @Field(() => MessagingProviderAvgAggregateInput, {nullable:true})
    _avg?: MessagingProviderAvgAggregateInput;

    @Field(() => MessagingProviderSumAggregateInput, {nullable:true})
    _sum?: MessagingProviderSumAggregateInput;

    @Field(() => MessagingProviderMinAggregateInput, {nullable:true})
    _min?: MessagingProviderMinAggregateInput;

    @Field(() => MessagingProviderMaxAggregateInput, {nullable:true})
    _max?: MessagingProviderMaxAggregateInput;
}
