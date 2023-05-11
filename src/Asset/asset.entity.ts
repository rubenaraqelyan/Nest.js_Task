import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { User } from '../user/user.entity';

@Entity()
export class Asset {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    type: number;

    @Column()
    level: number;

    @ManyToOne(() => User, (user) => user.assets)
    @JoinColumn({ name: 'address', referencedColumnName: 'address' })
    user: User;
}
