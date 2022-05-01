import { IsString, IsNumber, IsNotEmpty, IsPositive } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateTransaccionDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: `descripcion del usuario` })
  readonly descripcion: string;

  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  @ApiProperty()
  readonly monto: number;
}
