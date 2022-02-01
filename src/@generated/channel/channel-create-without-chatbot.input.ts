import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { MessagingProviderCreateNestedOneWithoutChannelsInput } from '../messaging-provider/messaging-provider-create-nested-one-without-channels.input';

@InputType()
export class ChannelCreateWithoutChatbotInput {

    @Field(() => String, {nullable:false})
    @Validator.IsNotEmpty()
    cellphone!: string;

    @Field(() => String, {nullable:false})
    @Validator.IsNotEmpty()
    accountSid!: string;

    @Field(() => String, {nullable:false})
    @Validator.IsNotEmpty()
    authToken!: string;

    @Field(() => String, {nullable:false})
    @Validator.IsNotEmpty()
    httpVerb!: string;

    @Field(() => String, {nullable:false})
    @Validator.IsNotEmpty()
    @Validator.IsUrl()
    callbackUrl!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => MessagingProviderCreateNestedOneWithoutChannelsInput, {nullable:false})
    messagingProvider!: MessagingProviderCreateNestedOneWithoutChannelsInput;
}
