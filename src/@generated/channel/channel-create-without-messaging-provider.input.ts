import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { ChatbotCreateNestedOneWithoutChannelInput } from '../chatbot/chatbot-create-nested-one-without-channel.input';

@InputType()
export class ChannelCreateWithoutMessagingProviderInput {

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

    @Field(() => ChatbotCreateNestedOneWithoutChannelInput, {nullable:false})
    chatbot!: ChatbotCreateNestedOneWithoutChannelInput;
}
