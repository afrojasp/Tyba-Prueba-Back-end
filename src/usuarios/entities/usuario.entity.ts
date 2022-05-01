import { Exclude } from 'class-transformer';
import { PrimaryColumn, Column, Entity } from 'typeorm';

@Entity()
export class Usuario {
  @PrimaryColumn()
  usuario: string;

  @Exclude()
  @Column({ type: 'varchar', length: 255 })
  password: string;
}
