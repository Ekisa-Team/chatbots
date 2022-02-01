import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { ChannelWhereInput } from '../channel/channel-where.input';
import { AppWhereInput } from '../app/app-where.input';
import { TemplateMessageListRelationFilter } from '../template-message/template-message-list-relation-filter.input';

@InputType()
export class ChatbotWhereInput {

    @Field(() => [ChatbotWhereInput], {nullable:true})
    AND?: Array<ChatbotWhereInput>;

    @Field(() => [ChatbotWhereInput], {nullable:true})
    OR?: Array<ChatbotWhereInput>;

    @Field(() => [ChatbotWhereInput], {nullable:true})
    NOT?: Array<ChatbotWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    accessKey?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => ChannelWhereInput, {nullable:true})
    channel?: ChannelWhereInput;

    @Field(() => IntFilter, {nullable:true})
    appId?: IntFilter;

    @Field(() => AppWhereInput, {nullable:true})
    app?: AppWhereInput;

    @Field(() => TemplateMessageListRelationFilter, {nullable:true})
    templateMessages?: TemplateMessageListRelationFilter;
}
