import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class ChannelScalarWhereInput {

    @Field(() => [ChannelScalarWhereInput], {nullable:true})
    AND?: Array<ChannelScalarWhereInput>;

    @Field(() => [ChannelScalarWhereInput], {nullable:true})
    OR?: Array<ChannelScalarWhereInput>;

    @Field(() => [ChannelScalarWhereInput], {nullable:true})
    NOT?: Array<ChannelScalarWhereInput>;

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

    @Field(() => IntFilter, {nullable:true})
    chatbotId?: IntFilter;
}
