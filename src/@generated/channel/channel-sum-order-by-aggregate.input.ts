import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class ChannelSumOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    messagingProviderId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    chatbotId?: keyof typeof SortOrder;
}
