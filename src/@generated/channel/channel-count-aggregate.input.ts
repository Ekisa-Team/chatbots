import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ChannelCountAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    cellphone?: true;

    @Field(() => Boolean, {nullable:true})
    accountSid?: true;

    @Field(() => Boolean, {nullable:true})
    authToken?: true;

    @Field(() => Boolean, {nullable:true})
    httpVerb?: true;

    @Field(() => Boolean, {nullable:true})
    callbackUrl?: true;

    @Field(() => Boolean, {nullable:true})
    createdAt?: true;

    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;

    @Field(() => Boolean, {nullable:true})
    messagingProviderId?: true;

    @Field(() => Boolean, {nullable:true})
    chatbotId?: true;

    @Field(() => Boolean, {nullable:true})
    _all?: true;
}
