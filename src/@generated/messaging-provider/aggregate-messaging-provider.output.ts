import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { MessagingProviderCountAggregate } from './messaging-provider-count-aggregate.output';
import { MessagingProviderAvgAggregate } from './messaging-provider-avg-aggregate.output';
import { MessagingProviderSumAggregate } from './messaging-provider-sum-aggregate.output';
import { MessagingProviderMinAggregate } from './messaging-provider-min-aggregate.output';
import { MessagingProviderMaxAggregate } from './messaging-provider-max-aggregate.output';

@ObjectType()
export class AggregateMessagingProvider {

    @Field(() => MessagingProviderCountAggregate, {nullable:true})
    _count?: MessagingProviderCountAggregate;

    @Field(() => MessagingProviderAvgAggregate, {nullable:true})
    _avg?: MessagingProviderAvgAggregate;

    @Field(() => MessagingProviderSumAggregate, {nullable:true})
    _sum?: MessagingProviderSumAggregate;

    @Field(() => MessagingProviderMinAggregate, {nullable:true})
    _min?: MessagingProviderMinAggregate;

    @Field(() => MessagingProviderMaxAggregate, {nullable:true})
    _max?: MessagingProviderMaxAggregate;
}
