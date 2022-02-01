import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TemplateMessageWhereInput } from './template-message-where.input';
import { TemplateMessageOrderByWithRelationInput } from './template-message-order-by-with-relation.input';
import { TemplateMessageWhereUniqueInput } from './template-message-where-unique.input';
import { Int } from '@nestjs/graphql';
import { TemplateMessageScalarFieldEnum } from './template-message-scalar-field.enum';

@ArgsType()
export class FindManyTemplateMessageArgs {

    @Field(() => TemplateMessageWhereInput, {nullable:true})
    where?: TemplateMessageWhereInput;

    @Field(() => [TemplateMessageOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<TemplateMessageOrderByWithRelationInput>;

    @Field(() => TemplateMessageWhereUniqueInput, {nullable:true})
    cursor?: TemplateMessageWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [TemplateMessageScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof TemplateMessageScalarFieldEnum>;
}
