import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class TemplateMessageScalarWhereInput {

    @Field(() => [TemplateMessageScalarWhereInput], {nullable:true})
    AND?: Array<TemplateMessageScalarWhereInput>;

    @Field(() => [TemplateMessageScalarWhereInput], {nullable:true})
    OR?: Array<TemplateMessageScalarWhereInput>;

    @Field(() => [TemplateMessageScalarWhereInput], {nullable:true})
    NOT?: Array<TemplateMessageScalarWhereInput>;

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
}
