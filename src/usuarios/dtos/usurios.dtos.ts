import { IsString, IsNotEmpty } from 'class-validator';
import { PartialType, ApiProperty } from '@nestjs/swagger';

export class CreateUsuarioDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: `product's name` })
  readonly usuario: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly password: string;
}

export class UpdateUsuarioDto extends PartialType(CreateUsuarioDto) {}
