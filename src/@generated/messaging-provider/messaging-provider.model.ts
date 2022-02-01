import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Channel } from '../channel/channel.model';
import { MessagingProviderCount } from './messaging-provider-count.output';

@ObjectType()
export class MessagingProvider {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => [Channel], {nullable:true})
    channels?: Array<Channel>;

    @Field(() => MessagingProviderCount, {nullable:true})
    _count?: MessagingProviderCount | null;
}
