import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ChannelOrderByRelationAggregateInput } from '../channel/channel-order-by-relation-aggregate.input';

@InputType()
export class MessagingProviderOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => ChannelOrderByRelationAggregateInput, {nullable:true})
    channels?: ChannelOrderByRelationAggregateInput;
}
