import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MessagingProviderWhereInput } from './messaging-provider-where.input';
import { MessagingProviderOrderByWithRelationInput } from './messaging-provider-order-by-with-relation.input';
import { MessagingProviderWhereUniqueInput } from './messaging-provider-where-unique.input';
import { Int } from '@nestjs/graphql';
import { MessagingProviderCountAggregateInput } from './messaging-provider-count-aggregate.input';
import { MessagingProviderAvgAggregateInput } from './messaging-provider-avg-aggregate.input';
import { MessagingProviderSumAggregateInput } from './messaging-provider-sum-aggregate.input';
import { MessagingProviderMinAggregateInput } from './messaging-provider-min-aggregate.input';
import { MessagingProviderMaxAggregateInput } from './messaging-provider-max-aggregate.input';

@ArgsType()
export class MessagingProviderAggregateArgs {

    @Field(() => MessagingProviderWhereInput, {nullable:true})
    where?: MessagingProviderWhereInput;

    @Field(() => [MessagingProviderOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<MessagingProviderOrderByWithRelationInput>;

    @Field(() => MessagingProviderWhereUniqueInput, {nullable:true})
    cursor?: MessagingProviderWhereUniqueInput;

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
