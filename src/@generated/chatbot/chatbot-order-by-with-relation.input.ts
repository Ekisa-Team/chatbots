import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ChannelOrderByWithRelationInput } from '../channel/channel-order-by-with-relation.input';
import { AppOrderByWithRelationInput } from '../app/app-order-by-with-relation.input';
import { TemplateMessageOrderByRelationAggregateInput } from '../template-message/template-message-order-by-relation-aggregate.input';

@InputType()
export class ChatbotOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    accessKey?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => ChannelOrderByWithRelationInput, {nullable:true})
    channel?: ChannelOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    appId?: keyof typeof SortOrder;

    @Field(() => AppOrderByWithRelationInput, {nullable:true})
    app?: AppOrderByWithRelationInput;

    @Field(() => TemplateMessageOrderByRelationAggregateInput, {nullable:true})
    templateMessages?: TemplateMessageOrderByRelationAggregateInput;
}
