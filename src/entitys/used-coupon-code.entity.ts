import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn
} from 'typeorm';
import { CouponCode } from './coupon-code.entity';
import { User } from './user.entity';
import { createdAtDefault } from './utils/created-at.util';

@Entity()
export class UsedCouponCode {
  @PrimaryGeneratedColumn()
  id: number;

  @Column(createdAtDefault)
  createdAt: Date;

  @ManyToOne(() => CouponCode, couponcode => couponcode.usedCouponCodes, {
    onDelete: 'RESTRICT'
  })
  @JoinColumn({ name: 'coupon_code', referencedColumnName: 'id' })
  couponCode: CouponCode;

  @ManyToOne(() => User, user => user.usedCouponCodes, {
    onDelete: 'SET NULL'
  })
  @JoinColumn({ name: 'used_coupon_code_id', referencedColumnName: 'id' })
  user: User;
}
