import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ChannelCountAggregate } from './channel-count-aggregate.output';
import { ChannelAvgAggregate } from './channel-avg-aggregate.output';
import { ChannelSumAggregate } from './channel-sum-aggregate.output';
import { ChannelMinAggregate } from './channel-min-aggregate.output';
import { ChannelMaxAggregate } from './channel-max-aggregate.output';

@ObjectType()
export class ChannelGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    cellphone!: string;

    @Field(() => String, {nullable:false})
    accountSid!: string;

    @Field(() => String, {nullable:false})
    authToken!: string;

    @Field(() => String, {nullable:false})
    httpVerb!: string;

    @Field(() => String, {nullable:false})
    callbackUrl!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => Int, {nullable:false})
    messagingProviderId!: number;

    @Field(() => Int, {nullable:false})
    chatbotId!: number;

    @Field(() => ChannelCountAggregate, {nullable:true})
    _count?: ChannelCountAggregate;

    @Field(() => ChannelAvgAggregate, {nullable:true})
    _avg?: ChannelAvgAggregate;

    @Field(() => ChannelSumAggregate, {nullable:true})
    _sum?: ChannelSumAggregate;

    @Field(() => ChannelMinAggregate, {nullable:true})
    _min?: ChannelMinAggregate;

    @Field(() => ChannelMaxAggregate, {nullable:true})
    _max?: ChannelMaxAggregate;
}
