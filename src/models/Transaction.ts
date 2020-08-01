import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

import Category from './Category';

@Entity('transactions')
class Transaction {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  // valor padrão é string poderia ser @Column()
  @Column('string')
  title: string;

  @Column('string')
  type: 'income' | 'outcome';

  @Column('decimal')
  value: number;

  // tipo de relacionamento
  // referencia do nome do campo na tabela
  @ManyToOne(() => Category)
  @JoinColumn({ name: 'category_id' })
  category_id: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Transaction;
