import { Entity, Column, PrimaryColumn, OneToMany } from 'typeorm';
import { Asset } from '../Asset/asset.entity';
import { Product } from '../Product/product.entity';

@Entity()
export class User {
    @PrimaryColumn()
    address: string;

    @Column({ type: 'float' })
    cash1: number;

    @Column({ type: 'float' })
    cash2: number;

    @Column({ type: 'float' })
    cash3: number;

    @OneToMany(() => Asset, (asset) => asset.user)
    assets: Asset[];

    @OneToMany(() => Product, (product) => product.user)
    products: Product[];
}
