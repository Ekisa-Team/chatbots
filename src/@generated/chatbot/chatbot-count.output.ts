import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ChatbotCount {

    @Field(() => Int, {nullable:false})
    templateMessages!: number;
}
