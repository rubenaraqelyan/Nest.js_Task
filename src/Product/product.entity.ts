import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { User } from '../User/user.entity';
import { Catalog } from '../Catalog/catalog.entity';

@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    address: string;

    @ManyToOne(() => User, (user) => user.products)
    @JoinColumn({ name: 'address', referencedColumnName: 'address' })
    user: User;

    @Column()
    catalogId: number;
}
