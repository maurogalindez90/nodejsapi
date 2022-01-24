import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany, ManyToMany, JoinTable } from "typeorm";
import { Banda } from './Banda';
@Entity(`${process.env.DB_NAME}.LIDER`)
export class Lider {

    @PrimaryGeneratedColumn({ name: "LIDER_ID" })
    public lider_id!: number;

    @Column({ name: "LIDER_NOMBRE" })
    public lider_nombre!: string;

    @Column({ name: "LIDER_APODO" })
    public lider_apodo!: string;

    @OneToMany(type => Banda, banda => banda.lider )
    public banda!: Banda[];
}