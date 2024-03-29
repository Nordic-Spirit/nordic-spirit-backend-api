import { Column } from 'typeorm';

export abstract class Location {
  @Column({ type: 'varchar', length: '50', nullable: true })
  country?: string;

  @Column({ type: 'varchar', length: '85', nullable: true })
  city?: string;

  @Column({
    name: 'postal_code',
    type: 'varchar',
    length: '12',
    nullable: true
  })
  postalCode: string;

  @Column({ type: 'varchar', length: '85', nullable: true })
  address?: string;
}
