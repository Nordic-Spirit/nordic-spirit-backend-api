import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn
} from 'typeorm';
import { Product } from './product.entity';
import { Session } from './session.entity';
import { createdAtDefault } from './utils/created-at.util';

@Entity({ name: 'basket_products' })
export class BasketProduct {
  @PrimaryGeneratedColumn()
  id: number;

  @Column(createdAtDefault)
  createdAt: Date;

  // @ManyToOne(() => Session, session => session.basketProducts, {
  //   onDelete: 'CASCADE'
  // })
  // @JoinColumn({ name: 'session_id', referencedColumnName: 'id' })
  // session: Session;

  @ManyToOne(() => Product, product => product.basketProducts, {
    onDelete: 'RESTRICT'
  })
  @JoinColumn({ name: 'product_id', referencedColumnName: 'id' })
  product: Product;
}
