import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class ChannelCountOrderByAggregateInput {

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

    @Field(() => SortOrder, {nullable:true})
    chatbotId?: keyof typeof SortOrder;
}
