import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Catalog {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    url: string;

    @Column()
    cost1: number;

    @Column()
    cost2: number;

    @Column()
    cost3: number;

    @Column()
    req1: number;

    @Column()
    req2: number;

    @Column()
    req3: number;

    @Column()
    category: number;
}
