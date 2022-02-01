import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { MessagingProviderOrderByWithRelationInput } from '../messaging-provider/messaging-provider-order-by-with-relation.input';
import { ChatbotOrderByWithRelationInput } from '../chatbot/chatbot-order-by-with-relation.input';

@InputType()
export class ChannelOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    cellphone?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    accountSid?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    authToken?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    httpVerb?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    callbackUrl?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    messagingProviderId?: keyof typeof SortOrder;

    @Field(() => MessagingProviderOrderByWithRelationInput, {nullable:true})
    messagingProvider?: MessagingProviderOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    chatbotId?: keyof typeof SortOrder;

    @Field(() => ChatbotOrderByWithRelationInput, {nullable:true})
    chatbot?: ChatbotOrderByWithRelationInput;
}
