import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ChannelCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    cellphone!: number;

    @Field(() => Int, {nullable:false})
    accountSid!: number;

    @Field(() => Int, {nullable:false})
    authToken!: number;

    @Field(() => Int, {nullable:false})
    httpVerb!: number;

    @Field(() => Int, {nullable:false})
    callbackUrl!: number;

    @Field(() => Int, {nullable:false})
    createdAt!: number;

    @Field(() => Int, {nullable:false})
    updatedAt!: number;

    @Field(() => Int, {nullable:false})
    messagingProviderId!: number;

    @Field(() => Int, {nullable:false})
    chatbotId!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
