import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';

@InputType()
export class MessagingProviderCreateWithoutChannelsInput {

    @Field(() => String, {nullable:false})
    @Validator.IsNotEmpty()
    name!: string;
}
