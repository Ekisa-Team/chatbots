import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ChannelMaxAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    cellphone?: string;

    @Field(() => String, {nullable:true})
    accountSid?: string;

    @Field(() => String, {nullable:true})
    authToken?: string;

    @Field(() => String, {nullable:true})
    httpVerb?: string;

    @Field(() => String, {nullable:true})
    callbackUrl?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Int, {nullable:true})
    messagingProviderId?: number;

    @Field(() => Int, {nullable:true})
    chatbotId?: number;
}
