import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Channel } from '../channel/channel.model';
import { Int } from '@nestjs/graphql';
import { App } from '../app/app.model';
import { TemplateMessage } from '../template-message/template-message.model';
import { ChatbotCount } from './chatbot-count.output';

@ObjectType()
export class Chatbot {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    accessKey!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => Channel, {nullable:true})
    channel?: Channel | null;

    @Field(() => Int, {nullable:false})
    appId!: number;

    @Field(() => App, {nullable:false})
    app?: App;

    @Field(() => [TemplateMessage], {nullable:true})
    templateMessages?: Array<TemplateMessage>;

    @Field(() => ChatbotCount, {nullable:true})
    _count?: ChatbotCount | null;
}
