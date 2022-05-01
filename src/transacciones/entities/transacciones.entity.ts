import { Exclude } from 'class-transformer';
import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';

@Entity()
export class Transaccion {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  descripcion: string;

  @Exclude()
  @Column({ type: 'int' })
  monto: number;
}
