import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany, ManyToMany, JoinTable } from "typeorm";
import { Banda } from './Banda';
@Entity(`${process.env.ARQ_DB_NAME}.LIDER`)
export class Lider {

    @PrimaryGeneratedColumn({ name: "LIDER_ID" })
    public id!: number;

    @Column({ name: "LIDER_NOMBRE" })
    public name!: string;

    @Column({ name: "LIDER_APODO" })
    public nickname!: string;

    @OneToMany(() => Banda, band => band.leader )
    public band!: Banda[];
}