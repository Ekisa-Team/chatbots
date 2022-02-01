import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { MessagingProvider } from '../messaging-provider/messaging-provider.model';
import { Chatbot } from '../chatbot/chatbot.model';

@ObjectType()
export class Channel {

    @Field(() => ID, {nullable:false})
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
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => Int, {nullable:false})
    messagingProviderId!: number;

    @Field(() => MessagingProvider, {nullable:false})
    messagingProvider?: MessagingProvider;

    @Field(() => Int, {nullable:false})
    chatbotId!: number;

    @Field(() => Chatbot, {nullable:false})
    chatbot?: Chatbot;
}
