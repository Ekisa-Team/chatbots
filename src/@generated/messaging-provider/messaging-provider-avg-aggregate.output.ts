import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class MessagingProviderAvgAggregate {

    @Field(() => Float, {nullable:true})
    id?: number;
}
