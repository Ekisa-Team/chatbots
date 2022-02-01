import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { ChatbotWhereInput } from '../chatbot/chatbot-where.input';

@InputType()
export class TemplateMessageWhereInput {

    @Field(() => [TemplateMessageWhereInput], {nullable:true})
    AND?: Array<TemplateMessageWhereInput>;

    @Field(() => [TemplateMessageWhereInput], {nullable:true})
    OR?: Array<TemplateMessageWhereInput>;

    @Field(() => [TemplateMessageWhereInput], {nullable:true})
    NOT?: Array<TemplateMessageWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    message?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => IntFilter, {nullable:true})
    chatbotId?: IntFilter;

    @Field(() => ChatbotWhereInput, {nullable:true})
    chatbot?: ChatbotWhereInput;
}
