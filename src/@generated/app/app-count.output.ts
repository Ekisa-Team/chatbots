import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class AppCount {

    @Field(() => Int, {nullable:false})
    chatbots!: number;
}
