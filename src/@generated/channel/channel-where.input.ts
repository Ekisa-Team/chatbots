import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { MessagingProviderWhereInput } from '../messaging-provider/messaging-provider-where.input';
import { ChatbotWhereInput } from '../chatbot/chatbot-where.input';

@InputType()
export class ChannelWhereInput {

    @Field(() => [ChannelWhereInput], {nullable:true})
    AND?: Array<ChannelWhereInput>;

    @Field(() => [ChannelWhereInput], {nullable:true})
    OR?: Array<ChannelWhereInput>;

    @Field(() => [ChannelWhereInput], {nullable:true})
    NOT?: Array<ChannelWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    cellphone?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    accountSid?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    authToken?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    httpVerb?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    callbackUrl?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => IntFilter, {nullable:true})
    messagingProviderId?: IntFilter;

    @Field(() => MessagingProviderWhereInput, {nullable:true})
    messagingProvider?: MessagingProviderWhereInput;

    @Field(() => IntFilter, {nullable:true})
    chatbotId?: IntFilter;

    @Field(() => ChatbotWhereInput, {nullable:true})
    chatbot?: ChatbotWhereInput;
}
