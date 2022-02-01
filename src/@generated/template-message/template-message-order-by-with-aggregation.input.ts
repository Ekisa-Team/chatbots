import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { TemplateMessageCountOrderByAggregateInput } from './template-message-count-order-by-aggregate.input';
import { TemplateMessageAvgOrderByAggregateInput } from './template-message-avg-order-by-aggregate.input';
import { TemplateMessageMaxOrderByAggregateInput } from './template-message-max-order-by-aggregate.input';
import { TemplateMessageMinOrderByAggregateInput } from './template-message-min-order-by-aggregate.input';
import { TemplateMessageSumOrderByAggregateInput } from './template-message-sum-order-by-aggregate.input';

@InputType()
export class TemplateMessageOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    message?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    chatbotId?: keyof typeof SortOrder;

    @Field(() => TemplateMessageCountOrderByAggregateInput, {nullable:true})
    _count?: TemplateMessageCountOrderByAggregateInput;

    @Field(() => TemplateMessageAvgOrderByAggregateInput, {nullable:true})
    _avg?: TemplateMessageAvgOrderByAggregateInput;

    @Field(() => TemplateMessageMaxOrderByAggregateInput, {nullable:true})
    _max?: TemplateMessageMaxOrderByAggregateInput;

    @Field(() => TemplateMessageMinOrderByAggregateInput, {nullable:true})
    _min?: TemplateMessageMinOrderByAggregateInput;

    @Field(() => TemplateMessageSumOrderByAggregateInput, {nullable:true})
    _sum?: TemplateMessageSumOrderByAggregateInput;
}
