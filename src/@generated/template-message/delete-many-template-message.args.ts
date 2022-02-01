import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TemplateMessageWhereInput } from './template-message-where.input';

@ArgsType()
export class DeleteManyTemplateMessageArgs {

    @Field(() => TemplateMessageWhereInput, {nullable:true})
    where?: TemplateMessageWhereInput;
}
