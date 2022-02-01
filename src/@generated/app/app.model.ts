import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Chatbot } from '../chatbot/chatbot.model';
import { AppCount } from './app-count.output';

@ObjectType()
export class App {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => [Chatbot], {nullable:true})
    chatbots?: Array<Chatbot>;

    @Field(() => AppCount, {nullable:true})
    _count?: AppCount | null;
}
